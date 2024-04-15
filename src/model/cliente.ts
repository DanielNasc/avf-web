import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 2,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    postalCode: {
        type: String,
        required: true,
    },
})

export const Cliente = mongoose.model('Cliente', clienteSchema);