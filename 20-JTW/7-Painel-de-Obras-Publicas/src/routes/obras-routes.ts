import { Router } from "express";
import { ObrasController } from "../controller/obras-controller";
import { ensureathenticated } from "../middlewares/ensureathenticated";

const obrasController = new ObrasController()

export const obrasRoutes = Router()

obrasRoutes.post('/', ensureathenticated, obrasController.create)
obrasRoutes.patch('/:id/fiscalizar', ensureathenticated, obrasController.update)