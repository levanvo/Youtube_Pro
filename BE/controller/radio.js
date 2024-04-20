import Model_Radio from "../model/radio.js";
import Model_Chanels from "../model/chanels_user.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

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
        const uniqueID = uuidv4();

        const dataRadio = await Model_Radio.create({...data,uuid_Radio: uniqueID});
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