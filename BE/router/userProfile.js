import express from "express";
import { allUser, oneUser, removeUser, updateUser } from "../controller/userProfile.js";

const routerUser = express.Router();

routerUser.get("/all-User",allUser);
routerUser.get("/one-User/:id",oneUser);
routerUser.put("/update-User/:id",updateUser);
routerUser.delete("/remove-User",removeUser);

export default routerUser;