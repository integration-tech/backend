import express, { Request, Response } from "express";
import dotenv from "dotenv";
import register from "./api/v1/controllers/register";
import form from "./api/v1/controllers/form";
import formdata from "./api/v1/controllers/formdata";

dotenv.config();

import "./api/v1/models/mongodb";
import bodyParser from "body-parser";

const app = express();

const PORT = 8001;

// adding body parser
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World !");
});
app.use("/", register);
app.use("/", form);
app.use("/", formdata);

app.listen(PORT, () => {
  console.log(`Connected to PORT ${PORT}`);
});
