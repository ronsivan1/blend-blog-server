import { Router } from "express";
import AuthController from "../controllers/AuthController";
import validateToken from '../middleware/validateToken'

const router = Router();

router.get("/validate", validateToken, AuthController.validateToken);
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

export default router;
