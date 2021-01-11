import { Router } from "express";
import PostController from "../controllers/PostController";
import validateToken from "../middleware/validateToken";
const router = Router();

router.post("/", validateToken, PostController.createPost);
router.put("/:id", validateToken, PostController.updatePost);
router.delete("/:id", validateToken, PostController.deletePost);
router.get("/:id", PostController.singlePost);
router.get("/", PostController.allPosts);

export default router;
