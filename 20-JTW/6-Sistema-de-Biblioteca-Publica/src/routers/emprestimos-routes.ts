import { Router } from "express";


import { ensureAthenticated } from '../middlewares/ensureAthenticated'
import { verifyUserAthorization } from '../middlewares/verifyUserAthorization'
import { EmprestimoController } from '../controllers/emprestimo-controller'


const emprestimosController = new EmprestimoController()

export const emprestimosRoutes = Router()

emprestimosRoutes.post('/',ensureAthenticated, verifyUserAthorization(['leitor']), emprestimosController.create)