import { Request, Response, Router } from "express"
import { middlewareLocal } from "../middlewares/middlewareLocal"
import { DentistaController } from "../controllers/DentistaController"

const dentistaController = new DentistaController

export const routerDentista = Router()

routerDentista.get('/', middlewareLocal, dentistaController.getDentista)
routerDentista.post('/', middlewareLocal, dentistaController.createDentista)
routerDentista.get('/:id', middlewareLocal, dentistaController.getOneDentista)
routerDentista.put('/:id', middlewareLocal, dentistaController.putDentista)
routerDentista.delete('/:id', middlewareLocal, dentistaController.deleteDentista)