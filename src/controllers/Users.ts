import { RequestHandler } from "express";

import { Users } from "../models/Users";

export const createUsers: RequestHandler = async (req, res, next) => {
  try {
    var user = await Users.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "User created successfully", data: user });  
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const deleteUsers: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser: Users | null = await Users.findByPk(id);
    await Users.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: "User deleted successfully", data: deletedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const allUsers: Users[] = await Users.findAll();
    return res
      .status(200)
      .json({ message: "User fetched successfully", data: allUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user: Users | null = await Users.findByPk(id);
    return res
      .status(200)
      .json({ message: "User fetched successfully", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Users.update({ ...req.body }, { where: { id } });
    const updatedUsers: Users | null = await Users.findByPk(id);
    return res
      .status(200)
      .json({ message: "User updated successfully", data: updatedUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).send({message: error, data: {}});
  }
};
