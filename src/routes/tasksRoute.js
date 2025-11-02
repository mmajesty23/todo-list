import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../controller/tasksController.js";

import { validateCreateTask } from "../middleware/validation/addTaskValidation.js";
import { validateDeleteTask } from "../middleware/validation/deleteTaskValidation.js";
import { validateUpdateTask } from "../middleware/validation/updateTaskValidation.js";

const router = express.Router();

// CREATE NEW TASK
router.post("/", validateCreateTask, createTask);

// READ - GET
router.get("/", getAllTask);

// UPDATE - PATCH
router.patch("/:id", validateUpdateTask, updateTask);

// DELETE TASK - DELETE
router.delete("/:id", validateDeleteTask, deleteTask);

export { router };

// routes - controller - middleware
