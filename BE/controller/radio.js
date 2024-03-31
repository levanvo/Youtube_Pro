import Model_Radio from "../model/radio.js";
import Model_Chanels from "../model/chanels_user.js";
import jwt from "jsonwebtoken";

export const allRadio = async (req, res) => {
    try {
        const dataRadio = await Model_Radio.find();
        return res.status(200).json({
            message: "All Radio",
            dataRadio
        });
    } catch {
        return res.status(400).json({
            message: "Error get-all Radio !"
        })
    }
};

export const oneRadio = async (req, res) => {
    try {
        const _idRadio = req.params.id;
        const dataRadio = await Model_Radio.findById(_idRadio);

        return res.status(200).json({
            message: "getOne Radio.",
            dataRadio
        });
    } catch {
        return res.status(400).json({
            message: "Error get-one Radio !"
        })
    }
};

export const createRadio = async (req, res) => {
    try {
        const data=req.body;

        const dataRadio = await Model_Radio.create(data);
        await Model_Chanels.findByIdAndUpdate(dataRadio.chanels_ID,{
            $addToSet:{
                radio_ID:dataRadio._id,
            },
        });

        return res.status(200).json({
            message: "created 1 Radio",
            dataRadio
        });
    } catch {
        return res.status(400).json({
            message: "Error create Radio !"
        })
    }
};

export const removeRadio = async (req, res) => {
    try {
        const _idRadio = req.params.id;

        const dataRadio = await Model_Radio.findByIdAndDelete(_idRadio);

        return Promise.resolve({
            message: "deleted Radio.",
            dataRadio
        });
    } catch {
        return res.status(400).json({
            message: "Error remove Radio !"
        })
    }
};