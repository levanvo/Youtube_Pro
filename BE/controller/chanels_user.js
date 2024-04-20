import Model_Chanels from "../model/chanels_user.js";
import Model_Videos from "../model/video.js";
import Model_User from "../model/login.js";
import jwt from "jsonwebtoken";

export const allChanel = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({
                message: "Missing authorization token"
            });
        }

        jwt.verify(token, 'levanvo2k', async (err, decoded) => {
            // if (err) {
            //     return res.status(403).json({
            //         message: "Invalid or expired token."
            //     });
            // } else {
            //     const verifiy = await Model_User.findById(decoded._id);
            //     const { scopes } = verifiy;

            //     if (scopes.includes("admin")) {
                    const dataChanels = await Model_Chanels.find();
                    return res.status(200).json({
                        message: "All Chanels",
                        dataChanels
                    });
            //     } else {
            //         return res.status(500).json({
            //             message: "You do not have permissions !!"
            //         });
            //     };
            // };
        });
    } catch {
        return res.status(400).json({
            message: "Error getAll-chanels !"
        })
    }
};

export const oneChanel = async (req, res) => {
    try {
        let _idChanel = req.params.id;
        let dataOrigin_Chanels = {};

        if(_idChanel.includes("&_id_Chanels")){
            _idChanel=_idChanel.replace("&_id_Chanels","");
            dataOrigin_Chanels = await Model_Chanels.findById(_idChanel);
        };
        
        if(_idChanel.includes("&_idUser_Chanels")){
            _idChanel=_idChanel.replace("&_idUser_Chanels","");
            dataOrigin_Chanels = await Model_Chanels.findOne({ID_user_root:_idChanel});
        };

        return res.status(200).json({
            message: "getOne Chanel.",
            dataOrigin_Chanels
        });
    } catch {
        return res.status(400).json({
            message: "Error get-one Chanel !"
        })
    }
};

export const createChanel = async (req, res) => {
    try {
        const data = req.body;
        const dataChanel = await Model_Chanels.create(data);

        return res.status(200).json({
            message: "created 1 Chanel",
            dataChanel
        });
    } catch {
        return res.status(400).json({
            message: "Error create Chanel !",
        })
    }
};

export const isActice_Chanel = async (req,res)=>{
    try{
        const _idChanel = req.params.id;
        const dataChange = req.body;

        const dataUpdate = await Model_Chanels.findByIdAndUpdate({_id:_idChanel}, dataChange,{new:true});

        return res.status(200).json({
            message:"Changed status for chanel.",
            dataUpdate
        });
    }catch{
        return res.status(400).json({
            message:"Error catch isActive Chanel."
        })
    }
}

const _support_remove_chanel_1 = async (_idChanel,id_video)=>{
    try{
        const signalChanel = await Model_Chanels.findByIdAndUpdate(_idChanel,{
            $pull:{
                video_ID:id_video
            }
        });
    }catch{
        console.error("Error support - chanel -1")
    }
};
const _support_remove_chanel_2 = async (_idCVideo)=>{
    try{
        const signalChane2 = await Model_Videos.findByIdAndDelete(_idCVideo);
    }catch{
        console.error("Error support - chanel -2")
    }
};
export const removeChanel = async (req, res) => {
    try {
        const _idChanel = req.params.id;
        const authorization_IdVideo = req.headers;
        const {authorization, id_video} = authorization_IdVideo;

        if(id_video && id_video != undefined){
            _support_remove_chanel_1(_idChanel,id_video);
            _support_remove_chanel_2(id_video);
            return res.status(200).json({
                message: "deleted 1 element Chanel + Video.",
            });
        }else{
            const dataChanel = await Model_Chanels.findByIdAndDelete(_idChanel);
            return res.status(200).json({
                message: "deleted Chanel.",
                dataChanel
            });
        };
    } catch {
        return res.status(400).json({
            message: "Error remove Chanel !"
        })
    }
};