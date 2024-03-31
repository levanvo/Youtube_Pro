import Model_Chanels from "../model/chanels_user.js";
import jwt from "jsonwebtoken";

export const allChanel = async (req, res) => {
    try {
        const dataChanels = await Model_Chanels.find();
        return res.status(200).json({
            message: "All Chanels",
            dataChanels
        });
    } catch {
        return res.status(400).json({
            message: "Error getAll-chanels !"
        })
    }
};

export const oneChanel = async (req, res) => {
    try {
        const _idChanel = req.params.id;
        const dataChanel = await Model_Chanels.findById(_idChanel);
        
        return res.status(200).json({
            message: "getOne Chanel.",
            dataChanel
        });
    } catch {
        return res.status(400).json({
            message: "Error get-one Chanel !"
        })
    }
};

export const createChanel = async (req, res) => {
    try {
        const data=req.body;
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

export const removeChanel = async (req, res) => {
    try {
        const _idChanel = req.params.id;

        const dataChanel = await Model_Chanels.findByIdAndDelete(_idChanel);

        return Promise.resolve({
            message: "deleted Chanel.",
            dataChanel
        });
    } catch {
        return res.status(400).json({
            message: "Error remove Chanel !"
        })
    }
};