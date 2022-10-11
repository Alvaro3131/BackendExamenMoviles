import { Router } from "express";
import * as categoria from "../controllers/categoria.controllers";
const router = Router();
router.get("/", categoria.getCategorias);

export default router;
