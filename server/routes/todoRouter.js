import { pool } from "../helper/db.js";
import { Router } from "express";
import { auth } from "../helper/auth.js";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controllers/TaskController.js";

const router = Router();
router.get("/", getTasks);
router.post("/", auth, createTask);
router.delete("/", auth, deleteTask);

export default router;
