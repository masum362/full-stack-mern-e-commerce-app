import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";
import connection from "./database/db.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*", withCredentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

const port = process.env.PORT || 3000;
connection(process.env.MONGODB_URL);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
