import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";

import routerLogin from "./router/login.js";
import routerUser from "./router/userProfile.js";
import routerVideo from "./router/video.js";
import routerChanels_User from "./router/chanels_user.js";
import routerTiktok_short from "./router/tiktok_short.js";
import routerRadio from "./router/radio.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use("/",routerLogin);
app.use("/",routerUser);
app.use("/",routerChanels_User);
app.use("/",routerVideo);
app.use("/",routerTiktok_short);
app.use("/",routerRadio);

mongoose.connect(process.env.DB_MONGO+"youtube2024")
    .then(()=>{
        console.log(chalk.green("MongoDB+srv is connected ..............________________>>>"));
    }).catch((error)=>{
        console.log(chalk.red("Error connect to MongoDB+srv !!!"));
    });

app.listen(3000, () => {
    console.log('Server is running on port: http://localhost:3000');
});
