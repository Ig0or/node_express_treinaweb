import { Router } from "express";

import clientsController from "../controllers/clientsController";

const router = Router();

router.get("/", clientsController.index);
router.get("/produto/:id", clientsController.product);

export default router;
