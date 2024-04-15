import { ValidationError } from "../error/validation.error";
import { validateByRegex, validateStringSize } from "../utils/validators";

export class CreateUserDto {
    name: string;
    address: string;
    phone?: string;
    postalCode: string;

    constructor(name: string, address: string, postalCode: string, phone?: string) {
        if (!validateStringSize(2, 30, name)) {
            throw new ValidationError('Nome deve ter entre 2 e 30 caracteres', 'name');
        }

        if (!validateStringSize(2, 60, address)) {
            throw new ValidationError('Endereço deve ter entre 2 e 60 caracteres', 'address');
        }

        if (phone && !validateByRegex(/^\d{11}$/, phone)) {
            throw new ValidationError('Telefone deve ter 11 dígitos numéricos', 'phone');
        }

        let cepReg = postalCode.includes('-') ? /^\d{5}-\d{3}$/ : /^\d{8}$/;

        if (!validateByRegex(cepReg, postalCode)) {
            throw new ValidationError('CEP deve ter 8 dígitos numéricos ou seguir o padrão 00000-000', 'postalCode');
        }
        
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.postalCode = postalCode;
    }
}