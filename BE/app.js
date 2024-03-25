import express from "express";
import mongoose from "mongoose";
import routerLogin from "./router/login.js";
import routerUser from "./router/userProfile.js";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",routerLogin);
app.use("/",routerUser);

mongoose.connect(process.env.DB_MONGO+"youtube2024")
    .then(()=>{
        console.log(chalk.green("MongoDB+srv is connected ..............________________>>>"));
    }).catch((error)=>{
        console.log(chalk.red("Error connect to MongoDB+srv !!!"));
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
