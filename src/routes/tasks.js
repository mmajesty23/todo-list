import express from "express";
import { createTask } from "../controller/tasks.js";

const router = express.Router();

// CREATE NEW TASK
router.post("/", createTask);

export { router };
