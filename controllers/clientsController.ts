import { Request, Response } from "express";

function index(request: Request, response: Response, next: any) {
    response.render("index");
}

function product(request: Request, response: Response, next: any) {
    let products = [
        {
            produto: "Memória Ram",
            descrição: "16gb",
        },
        {
            produto: "Placa de vídeo",
            descrição: "8gb",
        },
    ];

    response.send(`<h1>${products[parseInt(request.params.id)].produto}</h1>
                <p>${products[parseInt(request.params.id)].descrição}</p>`);
}

export default { index, product };
