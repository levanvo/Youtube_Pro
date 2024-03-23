import express from "express";
import { LOGIN, LOGOUT } from "../controller/login.js";

const routerUser = express.Router();

routerUser.get("/",LOGIN);
routerUser.get("/logout",LOGOUT);

export default routerUser;