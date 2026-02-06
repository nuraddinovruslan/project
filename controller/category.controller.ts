import type { Request, Response } from "express";
import { Category } from "../model/category.model.js";

Category.sync({force: false})

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name required" });
    }

    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Add category error" });
  }
};

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await Category.findAll();
  res.json(categories);
};

export const updateCategory = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const category = await Category.findByPk(id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  await category.update(req.body);
  res.json(category);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const category = await Category.findByPk(id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  await category.destroy();
  res.json({ message: "Category deleted" });
};
