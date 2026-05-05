import { Router } from "express";
import { sum, square } from "../controllers/test.controller"

const router = Router();

router.post("/sum", sum);
router.post("/square", square);

export default router;