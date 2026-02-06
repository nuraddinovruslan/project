import type { Request, Response, NextFunction } from "express";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;

  if (!user) {
    return res.status(401).json({ message: "User topilmadi" });
  }

  if (user.role.toUpperCase() !== "ADMIN") {
    return res.status(403).json({ message: "Faqat admin uchun" });
  }

  next();
};
