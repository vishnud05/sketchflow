import { prisma } from "@repo/database";
import { SignInSchema, SignUpSchema } from "@repo/global/auth";
import { JWT_SECRET } from "@repo/shared-server/config";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, password, email } = req.body;

    SignUpSchema.safeParse({ name, password, email });

    const newUser = await prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });
    if (!newUser) {
      throw new Error("Error creating user");
    }

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    SignInSchema.safeParse({ email, password });

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign(user.id, JWT_SECRET);

    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export { router as authRouter };
