import { Router } from "express";

import { ClientesController } from "../controllers/ClientesController";

const clientesController = new ClientesController

export const clientesRoutes = Router()

clientesRoutes.get('/', clientesController.index)
clientesRoutes.get('/:id', clientesController.get_one)
clientesRoutes.post('/', clientesController.create)
clientesRoutes.put('/:id', clientesController.update)

