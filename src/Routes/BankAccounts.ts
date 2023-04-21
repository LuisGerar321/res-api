import { Router } from "express";

import {
  createBankAccounts,
  deleteBankAccounts,
  getAllBankAccounts,
  updateBankAccount,
  getBankAccountById,
} from "../controllers/BankAccounts";

const router = Router();

router.post("/", createBankAccounts);

router.get("/", getAllBankAccounts);

router.get("/:id", getBankAccountById);

router.put("/:id", updateBankAccount);

router.delete("/:id", deleteBankAccounts);

export default router;