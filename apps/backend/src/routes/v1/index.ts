import { Router } from "express";
import { authRouter } from "./auth.js";
import { roomRouter } from "./room.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/room", roomRouter);

export default router;
