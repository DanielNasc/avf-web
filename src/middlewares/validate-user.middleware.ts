import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dto/create-user.dto";

export function ValidateUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name, address, phone, postalCode } = req.body;

    if (!name || !address || !phone || !postalCode) {
        return res.status(400).json({ message: 'name, endereço, phone e CEP são obrigatórios' });
    }

    const clienteDto = new CreateUserDto(name, address, phone, postalCode);
    
    req.body.clienteDto = clienteDto;

    next()
}