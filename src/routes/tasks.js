import { Router } from "express";
import {
  count,
  createTasks,
  deleteTasks,
  getTask,
  getTasks,
  updateTasks,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/count", count);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTasks);
router.put("/tasks/:id", updateTasks);
router.delete("/tasks/:id", deleteTasks);

export default router;
