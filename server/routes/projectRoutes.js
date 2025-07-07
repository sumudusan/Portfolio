import express from "express";
import { addProject, deleteProject, getProject, updateProject } from "../controllers/projectController.js";

const router= express.Router();

router.post("/", addProject);
router.get("/" , getProject);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

export default router;