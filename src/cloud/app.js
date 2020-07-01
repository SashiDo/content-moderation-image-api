/*
 * Advanced Cloud Code Example
 */

import express from "express";
import cors from "cors";
import routes from "./routes";
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// API Routes
app.use("/api", routes.api);

export default app;
