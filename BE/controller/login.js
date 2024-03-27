import axios from "axios";
import dotenv from "dotenv";
import session from "express-session";
import Model_User from "../model/login.js"
import jwt from 'jsonwebtoken';
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
                    const object_User = {
                        sub: userInfo.sub,
                        name: userInfo.name,
                        picture: userInfo.picture,
                        email: userInfo.email,
                        locale: userInfo.locale,
                        accessToken: accessToken,
                        isNewUser: true
                    };
                    const checkEmail = await Model_User.findOne({ email: object_User.email });

                    if (checkEmail) {
                        const data = await Model_User.findByIdAndUpdate({ _id: checkEmail._id }, { ...object_User, isNewUser: false }, { new: true });
                        const secretKey = 'levanvo2k';
                        const token = jwt.sign({ _id: data._id }, secretKey, { expiresIn: "6h" });

                        return Promise.resolve({
                            message: "data-User-old accessed.",
                            data,
                            token
                        });
                    } else {
                        const data = await Model_User.create({ ...object_User, scopes: ["user", "trial"] });
                        const secretKey = 'levanvo2k';
                        const token = jwt.sign({ _id: data._id }, secretKey, { expiresIn: '6h' });
                        return Promise.resolve({
                            message: "data-User-new accessed.",
                            data,
                            token
                        });
                    };
                })
                .then(({ data, token }) => {
                    const createdAt = data.createdAt;
                    const updatedAt = data.updatedAt;

                    if (data.createdAt) { data.createdAt = createdAt.toString() };
                    if (data.updatedAt) { data.updatedAt = updatedAt.toString() };

                    const dataOriginal = {
                        _id: data._id,
                        sub: data.sub,
                        name: data.name,
                        picture: data.picture,
                        email: data.email,
                        locale: data.locale,
                        accessToken: data.accessToken,
                        isNewUser: data.isNewUser,
                        scopes: data.scopes,
                        tokenUser: token
                    };

                    // console.log(dataOriginal);
                    const redirectUrl = 'http://localhost:5173/youtube.com';
                    const queryData = new URLSearchParams(dataOriginal).toString();
                    res.redirect(`${redirectUrl}?${queryData}`);
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching access token:', error);
        });
}

export const redirect = async (req, res) => {
    try {
        return res.redirect('http://localhost:5173/youtube.com');
    } catch {
        return res.json("Error")
    }
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