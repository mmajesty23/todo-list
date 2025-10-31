import { createTaskDB } from "../models/tasks.js";
import crypto from "crypto";

const createTask = async (req, res) => {
  try {
    const id = crypto.randomUUID();
    const { title, description, status } = req.body;
    await createTaskDB(id, title, description, status); // i try to instantiate outside variable
    res.status(201).json({
      message: "task created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      serverMessage: err,
    });
  }
};

export { createTask };
