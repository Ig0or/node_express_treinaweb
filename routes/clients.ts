import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.render("index");
});

router.get("/sobre", (request, response) => {
    response.send("about api");
});

export default router;
