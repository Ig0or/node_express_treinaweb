import { Router } from "express";

import clientsController from "../controllers/clientsController";

const router = Router();

router.get("/", clientsController.index);

export default router;
