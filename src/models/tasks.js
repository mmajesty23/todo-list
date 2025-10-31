import { dbPool } from "../config/database.js";

// CREATE TASK - POST
const createTaskDB = async (id_task, title, description, status) => {
  const SQLQuery = `INSERT INTO TASKS (id_task, title, description, status) VALUES (?,?,?,?)`;
  return dbPool.execute(SQLQuery, [id_task, title, description, status]);
};

export { createTaskDB };
