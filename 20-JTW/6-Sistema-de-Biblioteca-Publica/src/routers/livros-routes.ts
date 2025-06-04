import { Router } from "express";

import { LivroController } from '../controllers/livros-controller'
import { ensureAthenticated } from '../middlewares/ensureAthenticated'


const livroController = new LivroController()
export const livrosRoutes = Router()

livrosRoutes.post('/', ensureAthenticated, livroController.create)
