import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token; 

  if (!token) {
    return res.status(401).json({ message: "Token yoq" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token notogri" });
  }
};
