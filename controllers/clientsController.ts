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

async function create(request: Request, response: Response, next: any) {
    response.render("create");
}

async function store(request: Request, response: Response, next: any) {
    try {
        let client = request.body;
        client.id = 0;
        await ClientRepository.create(client);
    } catch (error) {
        console.log(error);
        response.status(500).end();
    }
    response.redirect("/clients");
}

async function edit(request: Request, response: Response, next: any) {
    try {
        const client = await ClientRepository.findByPk(request.params.id);
        if (!client) {
            response.status(404).send("client not found");
        } else {
            response.status(200).render("edit", { client: client });
        }
    } catch (error) {
        response.status(500).send();
    }
}

export default { index, show, create, store, edit };
