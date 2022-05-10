import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.send("main route");
});

router.get("/sobre", (request, response) => {
    response.send("about api");
});

export default router;
