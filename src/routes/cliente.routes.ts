import { Router } from "express";
import { ClienteController } from "../controllers/cliente.controller";
import { ValidateUserMiddleware } from "../middlewares/validate-user.middleware";

const clientesRoutes = Router()
const clienteController = new ClienteController()

clientesRoutes.get("/", (req, res) => clienteController.getAll(req, res))
clientesRoutes.get("/:id", (req, res) => clienteController.getById(req, res))
clientesRoutes.post("/", ValidateUserMiddleware, (req, res) => clienteController.create(req, res))

export { clientesRoutes }