import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/shared-server/config";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      status: "error",
      message: "Access denied. No token provided.",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Invalid token.",
    });
  }
};

export default authMiddleware;
