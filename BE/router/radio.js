import express from "express";
import { allRadio, createRadio, oneRadio, removeRadio } from "../controller/radio.js";

const routerRadio = express.Router();

routerRadio.get("/all-Radio",allRadio);
routerRadio.get("/one-Radio/:id",oneRadio);
routerRadio.post("/create-Radio",createRadio);
routerRadio.delete("/remove-Radio",removeRadio);

export default routerRadio;