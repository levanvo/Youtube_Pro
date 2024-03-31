import express from "express";
import { allTiktok_short, createTiktok_short, oneTiktok_short, removeTiktok_short } from "../controller/tiktok_short.js";

const routerTiktok_short = express.Router();

routerTiktok_short.get("/all-Tiktok_short",allTiktok_short);
routerTiktok_short.get("/one-Tiktok_short/:id",oneTiktok_short);
routerTiktok_short.post("/create-Tiktok_short",createTiktok_short);
routerTiktok_short.delete("/remove-Tiktok_short",removeTiktok_short);

export default routerTiktok_short;