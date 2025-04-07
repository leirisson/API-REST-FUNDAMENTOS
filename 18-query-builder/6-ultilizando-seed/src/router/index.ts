import { Router } from 'express'
import { routerDentista } from './routerDentista'

export const routes = Router()

routes.use('/dentista', routerDentista)