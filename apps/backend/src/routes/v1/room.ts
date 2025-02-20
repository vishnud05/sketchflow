import { Router } from "express";
import authMiddleware from "../../middleware/auth.js";
import { prisma } from "@repo/database";

const router = Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !req.userId) {
      throw new Error("Insufficient data provided");
    }

    const newRoom = await prisma.room.create({
      data: {
        name,
        hostId: req.userId,
      },
    });

    if (!newRoom) {
      throw new Error("Error creating room");
    }

    res.status(201).json({
      status: "success",
      data: {
        room: newRoom.id,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export { router as roomRouter };
