import UserController from "./../controllers/UserController";
import { Router } from "express";

const router = Router();

router.get("/:username", UserController.singleUser);

export default router;
