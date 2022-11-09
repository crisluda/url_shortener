import express from "express";
import { getUrl, postUrl, putUrl } from "../controllers/urlController.js";
const router = express.Router();

router.route("/").post(postUrl);
router.route("/:id").get(getUrl).put(putUrl);

export default router;
