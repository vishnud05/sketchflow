import { Router } from "express";
import { SignIn, SignUp } from "../../controller/auth";
import AsyncHandler from "../../utils/AsyncHandler";

const router = Router();

router.post("/signup", AsyncHandler(SignUp));

router.post("/signin", AsyncHandler(SignIn));

export { router as authRouter };
