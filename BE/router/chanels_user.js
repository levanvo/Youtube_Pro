import express from "express";
import { allChanel, createChanel, oneChanel, removeChanel } from "../controller/chanels_user.js";

const routerChanels_User = express.Router();

routerChanels_User.get("/all-Chanel",allChanel);
routerChanels_User.get("/one-Chanel/:id",oneChanel);
routerChanels_User.post("/add-Chanel",createChanel);
routerChanels_User.delete("/remove-Chanel",removeChanel);

export default routerChanels_User;