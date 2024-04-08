import Model_Video from "../model/video.js";
import Model_Chanels from "../model/chanels_user.js";
import jwt from "jsonwebtoken";

export const allVideo = async (req, res) => {
    try {
        const dataVideo = await Model_Video.find();
        return res.status(200).json({
            message: "All Videos",
            dataVideo
        });
    } catch {
        return res.status(400).json({
            message: "Error get-all Video !"
        })
    }
};

export const oneVideo = async (req, res) => {
    try {
        const _idVideo = req.params.id;
        const dataVideo = await Model_Video.findById(_idVideo);
        return res.status(200).json({
            message: "getOne Video.",
            dataVideo
        });
    } catch {
        return res.status(400).json({
            message: "Error get-one Video !"
        })
    }
};

export const createVideo = async (req, res) => {
    try {
        const data=req.body;

        const dataVideo = await Model_Video.create(data);
        await Model_Chanels.findByIdAndUpdate(dataVideo.chanels_ID,{
            $addToSet:{
                video_ID:dataVideo._id,
            },
        });

        return res.status(200).json({
            message: "created 1 Video",
            dataVideo
        });
    } catch {
        return res.status(400).json({
            message: "Error create Video !"
        })
    }
};

export const removeVideo = async (req, res) => {
    try {
        const _idVideo = req.params.id;

        const dataVideo = await Model_Video.findByIdAndDelete(_idVideo);

        return Promise.resolve({
            message: "deleted Video.",
            dataVideo
        });
    } catch {
        return res.status(400).json({
            message: "Error remove Video !"
        })
    }
};