import { Router } from "express";

import {
  createUsers,
  deleteUsers,
  getAllUsers,
  updateUser,
  getUserById,
} from "../controllers/Users";

const router = Router();

router.post("/", createUsers);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUsers);

export default router;