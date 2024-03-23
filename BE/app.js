import express from "express";
import mongoose from "mongoose";
import routerUser from "./router/login.js";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",routerUser);

mongoose.connect(process.env.DB_MONGO+"youtube2024")
    .then(()=>{
        console.log(chalk.green("MongoDB+srv is connected ..............________________>>>"));
    }).catch((error)=>{
        console.log(chalk.red("Error connect to MongoDB+srv !!!"));
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
