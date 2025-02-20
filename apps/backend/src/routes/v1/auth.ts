import { prisma } from "@repo/database";
import { SignInSchema, SignUpSchema } from "@repo/global/auth";
import { Router } from "express";
import { JWT_SECRET } from "@repo/shared-server/config";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const parsedData = SignUpSchema.safeParse({ name, password, email });

    if (!parsedData.success) {
      throw new Error(parsedData.error.message);
    }

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
    console.log(error);

    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const parsedData = SignInSchema.safeParse({ email, password });

    if (!parsedData.success) {
      throw new Error(parsedData.error.message);
    }

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
