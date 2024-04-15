import express from "express";
import { homePage,registerUser } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", homePage);
router.post("/register",registerUser)

export default router;
