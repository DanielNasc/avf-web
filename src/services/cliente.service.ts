import { CreateUserDto } from "../dto/create-user.dto";
import { Cliente } from "../model/cliente";

export class ClienteService {
    async getAll() {
        return await Cliente.find();
    }

    async getById(id: string) {
        return await Cliente.findById(id);
    }

    async create(cliente: CreateUserDto) {
        return await Cliente.create({
            name: cliente.name,
            address: cliente.address,
            phone: cliente.phone,
            postalCode: cliente.postalCode
        });
    }
}