import { Router } from "express";
import * as authController from "../controllers/auth.controllers";
import {verifySignup} from "../middlewares"

const router = Router();


router.post("/singup", [verifySignup.checkExistingUser, verifySignup.checkRolesExisted], authController.signUp);
router.post("/singin", authController.signinHandler)

export default router;