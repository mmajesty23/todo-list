import { title } from "process";
import { dbPool } from "../config/database.js";

// CREATE TASK - POST
const createTaskDB = async (
  id_task,
  title,
  description,
  status = "pending"
) => {
  const SQLQuery = `INSERT INTO TASKS (id_task, title, description, status) VALUES (?,?,?,?)`;
  return dbPool.execute(SQLQuery, [id_task, title, description, status]);
};

// READ TASK - GET
const getAllTaskDB = async () => {
  const SQLQuery = `SELECT * FROM Tasks`;
  return dbPool.execute(SQLQuery);
};

// UPDATE TASK - PATCH
const updateTaskDB = async (id_task, fields) => {
  const keys = Object.keys(fields);
  const setClause = keys.map((key) => `${key} = ?`).join(", ");
  const values = Object.values(fields);

  const SQLQuery = `UPDATE tasks SET ${setClause} WHERE id_task=?`;
  return dbPool.execute(SQLQuery, [...values, id_task]);
};

// DELETE TASK
const deleteTaskDB = async (id_task) => {
  const SQLQuery = `DELETE FROM tasks WHERE id_task=?`;
  return dbPool.execute(SQLQuery, [id_task]);
};

export { createTaskDB, getAllTaskDB, updateTaskDB, deleteTaskDB };

// add validation
