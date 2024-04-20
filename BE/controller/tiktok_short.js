import Model_Tiktok_short from "../model/tiktok_short.js";
import Model_Chanels from "../model/chanels_user.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

export const allTiktok_short = async (req, res) => {
    try {
        const dataTiktok_short = await Model_Tiktok_short.find();
        return res.status(200).json({
            message: "All Tiktok-shorts",
            dataTiktok_short
        });
    } catch {
        return res.status(400).json({
            message: "Error get-all Tiktok-shorts !"
        })
    }
};

export const oneTiktok_short = async (req, res) => {
    try {
        const _idTiktok_short = req.params.id;
        const dataTiktok_short = await Model_Tiktok_short.findById(_idTiktok_short);

        return res.status(200).json({
            message: "getOne Tiktok_short.",
            dataTiktok_short
        });
    } catch {
        return res.status(400).json({
            message: "Error get-one Tiktok_short !"
        })
    }
};

export const createTiktok_short = async (req, res) => {
    try {
        const data=req.body;
        const uniqueID = uuidv4();

        const dataTiktok_short = await Model_Tiktok_short.create({...data, uuid_TiktokShort: uniqueID});
        await Model_Chanels.findByIdAndUpdate(dataTiktok_short.chanels_ID,{
            $addToSet:{
                tiktok_shorts_ID:dataTiktok_short._id,
            },
        });

        return res.status(200).json({
            message: "created 1 Tiktok-short",
            dataTiktok_short
        });
    } catch {
        return res.status(400).json({
            message: "Error create Tiktok-short !"
        })
    }
};

export const removeTiktok_short = async (req, res) => {
    try {
        const _idTiktok_short = req.params.id;

        const dataTiktok_short = await Model_Tiktok_short.findByIdAndDelete(_idTiktok_short);

        return Promise.resolve({
            message: "deleted Tiktok_short.",
            dataTiktok_short
        });
    } catch {
        return res.status(400).json({
            message: "Error remove Tiktok_short !"
        })
    }
};