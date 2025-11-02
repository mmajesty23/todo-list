import { serverError } from "../middleware/errorHandler.js";
import {
  createTaskDB,
  getAllTaskDB,
  deleteTaskDB,
  updateTaskDB,
} from "../models/tasksModel.js";
import crypto from "crypto";

// CREATE
const createTask = async (req, res, next) => {
  try {
    const id = crypto.randomUUID();
    const { title, description } = req.body;
    await createTaskDB(id, title, description); // i try to instantiate outside variable
    res.status(201).json({
      success: true,
      message: "task created successfully",
      data: req.body,
    });
  } catch (err) {
    next(err);
  }
};

// READ
const getAllTask = async (_, res, next) => {
  try {
    const [rows] = await getAllTaskDB();
    res.status(200).json({
      success: true,
      message: "get all task success",
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    await updateTaskDB(id, fields);
    res.status(201).json({
      success: true,
      message: "task updated successfully",
      data: fields,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE
const deleteTask = async (req, res) => {
  try {
    await deleteTaskDB(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export { createTask, getAllTask, updateTask, deleteTask };
