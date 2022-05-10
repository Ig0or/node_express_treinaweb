import { Request, Response } from "express";

function index(request: Request, response: Response, next: any) {
    response.render("index");
}

export default { index };
