import express from "express";
// import cors from "cors"; // penting jika FE dan BE running beda port
import https from "https";
import fs from "fs";
import { router } from "./routes/tasksRoute.js";
import "dotenv/config";
import { serverError } from "./middleware/errorHandler.js";

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// ); ####################################### UPCOMING HOMEWORK

const port = process.env.PORT;
app.use(express.json());
app.use("/tasks", router);
app.use(serverError);

// Load SSL certificates
const options = {
  key: fs.readFileSync(process.env.CERT_KEY),
  cert: fs.readFileSync(process.env.CERT_PEM),
};

// ####(REMINDER) Create self-signed certificate for HTTPS development
// mkdir cert
// openssl req -nodes -new -x509 -keyout cert/key.pem -out cert/cert.pem -subj "/CN=localhost"

https.createServer(options, app).listen(port, () => {
  console.log(`server running on https://localhost:${port}`);
});
