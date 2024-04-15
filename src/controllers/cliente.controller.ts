import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";
import { CreateUserDto } from "../dto/create-user.dto";

export class ClienteController {
    clienteService: ClienteService = new ClienteService();

    async getAll(req: Request, res: Response) {
        try {
            const clientes = await this.clienteService.getAll();
            res.json(clientes);
        } catch (error: any) {
            res.status(500).json({ message: error.message ? error.message : error });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const cliente = await this.clienteService.getById(req.params.id);
            res.json(cliente);
        } catch (error: any) {
            res.status(500).json({ message: error.message ? error.message : error });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { clienteDto } = req.body;
            const cliente = await this.clienteService.create(clienteDto);
            res.json(cliente);
        } catch (error: any) {
            res.status(500).json({ message: error.message ? error.message : error });
        }
    }
}