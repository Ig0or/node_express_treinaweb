import { Request, Response } from "express";

import ClientRepository from "../models/clientsModel";
import { IClients } from "../models/clients";

async function index(request: Request, response: Response, next: any) {
    const clients = await ClientRepository.findAll();
    response.render("index", { clients: clients });
}

async function show(request: Request, response: Response, next: any) {
    const id = request.params.id;
    const client = await ClientRepository.findByPk(id);

    response.render("show", { client: client });
}

export default { index, show };
