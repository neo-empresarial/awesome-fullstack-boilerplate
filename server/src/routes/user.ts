import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.get("/", UserController.all);
router.get("/:id", UserController.one);
router.post("/", UserController.save);
router.delete("/:id", UserController.remove);

export default router;
