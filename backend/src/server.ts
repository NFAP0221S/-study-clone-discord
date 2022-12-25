import express, { Express } from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();
const PORT = process.env.PORT || process.env.API_PORT;

const app: Express = express();
// const express = require("express");
// const cors = require("cors");
// const http = require("http");

app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
