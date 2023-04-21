import { RequestHandler } from "express";

import { BankAccounts } from "../models/BankAccounts";

export const createBankAccounts: RequestHandler = async (req, res, next) => {
  try {
    var bankAccount = await BankAccounts.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "BankAccount created successfully", data: bankAccount });  
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const deleteBankAccounts: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBankAccount: BankAccounts | null = await BankAccounts.findByPk(id);
    await BankAccounts.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: "BankAccount deleted successfully", data: deletedBankAccount });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const getAllBankAccounts: RequestHandler = async (req, res, next) => {
  try {
    const allBankAccounts: BankAccounts[] = await BankAccounts.findAll();
    return res
      .status(200)
      .json({ message: "BankAccount fetched successfully", data: allBankAccounts });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const getBankAccountById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bankAccount: BankAccounts | null = await BankAccounts.findByPk(id);
    return res
      .status(200)
      .json({ message: "BankAccount fetched successfully", data: bankAccount });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const updateBankAccount: RequestHandler = async (req, res, next) => {
  try {
    const { userA, userB} = req.params;
    const { founds } = req.body;

    return res
      .status(200)
      .json({ message: "BankAccount updated successfully", data: { }});
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};
