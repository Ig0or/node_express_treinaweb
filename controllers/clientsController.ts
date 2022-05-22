import { Request, Response } from "express";

import ClientRepository from "../models/clientsModel";

async function home(request: Request, response: Response, next: any) {
    response.render("home");
}

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

async function update(request: Request, response: Response, next: any) {
    try {
        let client = request.body;
        await ClientRepository.update(client, {
            where: {
                id: request.params.id,
            },
        });
        response.redirect("/clients");
    } catch (error) {
        console.log(error);
        response.status(500).end();
    }
}

async function destroy(request: Request, response: Response, next: any) {
    try {
        await ClientRepository.destroy({
            where: {
                id: request.params.id,
            },
        });

        response.redirect("/clients");
    } catch (error) {
        console.log(error);
        response.status(500).end();
    }
}

export default { index, show, create, store, edit, update, destroy, home };
