import { Router } from "express";

import clientsController from "../controllers/clientsController";

const router = Router();

router.get("/clients", clientsController.index);
router.post("/clients", clientsController.store);
router.get("/client/create", clientsController.create);
router.get("/client/:id", clientsController.show);
router.put("/client/:id", clientsController.update);
router.get("/client/:id/edit", clientsController.edit);

export default router;
