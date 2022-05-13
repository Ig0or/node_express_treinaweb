import { Request, Response } from "express";

function index(request: Request, response: Response, next: any) {
    response.render("index");
}

function product(request: Request, response: Response, next: any) {
    let products = [
        {
            nome: "Memória Ram",
            descricao: "16gb",
        },
        {
            nome: "Placa de vídeo",
            descricao: "8gb",
        },
    ];

    let produto = products[parseInt(request.params.id)]
    response.render('produto', {produto: produto})

}

export default { index, product };
