import express from "express";
import { router } from "./routes/tasks.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/tasks", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// think about alter DB, status default value = false
// think about how to change status value in first created data in MYSql
