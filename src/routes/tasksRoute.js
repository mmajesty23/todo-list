import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
} from "../controller/tasksController.js";
import { validateCreateTask } from "../middleware/validation/addTaskValidation.js";
import { validateDeleteTask } from "../middleware/validation/deleteTaskValidation.js";

const router = express.Router();

// CREATE NEW TASK
router.post("/", validateCreateTask, createTask);

// READ - GET
router.get("/", getAllTask);

// DELETE TASK - DELETE
router.delete("/:id", validateDeleteTask, deleteTask);

export { router };

// routes - controller - middleware
