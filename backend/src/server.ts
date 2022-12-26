import express, { Express } from "express";
// import { Application, json, urlencoded, Response, Request, NextFunction } from 'express';
import http from "http";
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();
const app: Express = express();

const PORT = process.env.PORT || process.env.API_PORT;
const DB: string | undefined = process.env.MONGODB_URI || "";

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

// server.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

mongoose
  .connect(DB)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on ${PORT} `);
    });
  })
  .catch((err) => {
    console.log("DB 연결 실패...");
  });
