import { Router } from "express";
import { all, one, save, remove } from "../controller/UserController";

const router = Router();

router.get("/", all);
router.get("/:id", one);
router.post("/", save);
router.delete("/:id", remove);

export default router;
