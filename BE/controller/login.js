import axios from "axios";
import dotenv from "dotenv";
import session  from "express-session";
import Model_User from "../model/login.js"
dotenv.config();

const redirectUri = process.env.REDIRECT;
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

export const LOGIN = async (req, res, next) => {
    const code = req.query.code;

    if (!code) {
        res.status(400).send('Missing authorization code');
        return;
    };

    axios.post('https://oauth2.googleapis.com/token', {
        code: code,
        client_id: clientID,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    })
        .then(response => {
            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;// chưa có

            axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then(async (userInfoResponse) => {
                    const userInfo = userInfoResponse.data;
                    const object_User ={
                        sub:userInfo.sub,
                        name:userInfo.name,
                        picture:userInfo.picture,
                        email:userInfo.email,
                        locale:userInfo.locale,
                        accessToken:accessToken,
                        isNewUser:true
                    };
                    // console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{response: ",response);
                    const checkEmail = await Model_User.findOne({email:object_User.email});

                    if(checkEmail){
                        const data = await Model_User.findByIdAndUpdate({_id:checkEmail._id}, {...object_User, isNewUser:false}, {new:true});
                        // console.log("data-Old: ",data);
                        res.redirect('http://localhost:5173/youtube.com');
                        return Promise.resolve({
                            message:"data-User-old accessed.",
                            data
                        });
                    }else{
                        const data = await Model_User.create({...object_User, scopes:["user","trial"]});
                        // console.log("data-New: ",data);
                        res.redirect('http://localhost:5173/youtube.com');
                        return Promise.resolve({
                            message:"data-User-new accessed.",
                            data
                        });
                    };
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                    res.status(500).send('Error fetching user info');
                });
        })
        .catch(error => {
            console.error('Error fetching access token:', error);
            res.status(500).send('Error fetching access token');
        });
}

export const LOGOUT = async (req, res, next) => {
    // Xóa thông tin phiên đăng nhập hoặc token
    // Ví dụ: nếu bạn lưu token trong phiên, bạn có thể xóa nó bằng cách:
    delete req.session.token;

    // Xóa các biến phiên (session variables)
    // Ví dụ: nếu bạn sử dụng express-session
    // req.session.destroy();

    // Xóa cookie đăng nhập (nếu có)
    // Ví dụ: nếu bạn đặt cookie đăng nhập với tên 'accessToken'
    // res.clearCookie('accessToken');

    // Sau khi thực hiện các bước đăng xuất, chuyển hướng người dùng đến trang đăng nhập hoặc trang khác tùy theo yêu cầu của bạn
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send('Error logging out');
        } else {
            res.send('Logged out successfully');
        }
    });

    res.redirect('http://localhost:5173/');
}
