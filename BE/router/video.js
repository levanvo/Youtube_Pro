import express from "express";
import { allVideo, createVideo, oneVideo, removeVideo } from "../controller/video.js";

const routerVideo = express.Router();

routerVideo.get("/all-Video",allVideo);
routerVideo.get("/one-Video/:id",oneVideo);
routerVideo.post("/create-Video",createVideo);
routerVideo.delete("/remove-Video",removeVideo);

export default routerVideo;