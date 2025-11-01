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

// DELETE TASK
const deleteTaskDB = async (id_task) => {
  const SQLQuery = `DELETE FROM tasks WHERE id_task=?`;
  return dbPool.execute(SQLQuery, [id_task]);
};

export { createTaskDB, getAllTaskDB, deleteTaskDB };
