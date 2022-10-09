import express from "express";
import {
  addPost,
  deletePost,
  getComments,
  getPost,
  getPosts,
  postComment,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.post("/:id", postComment);
router.get("/comment/:id", getComments);

export default router;
