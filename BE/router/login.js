import express from "express";
import { LOGIN, LOGOUT } from "../controller/login.js";

const routerLogin = express.Router();

routerLogin.get("/",LOGIN);
routerLogin.get("/logout",LOGOUT);

export default routerLogin;