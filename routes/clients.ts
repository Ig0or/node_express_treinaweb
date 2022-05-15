import { Router } from "express";

import clientsController from "../controllers/clientsController";

const router = Router();

router.get("/", clientsController.index);
router.get("/client/:id", clientsController.show);

export default router;
