import {Router} from 'express'

import { ClientesController } from '../controllers/clientesController'


export const clientesRouter = Router()

const clientesController = new ClientesController

clientesRouter.get('/', clientesController.index)
clientesRouter.post('/', clientesController.create)