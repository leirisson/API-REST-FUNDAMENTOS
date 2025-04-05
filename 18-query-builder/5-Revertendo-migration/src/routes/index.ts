import { Router } from 'express'
import { routerPaciente } from './routerPacientes'

export const routes = Router()

routes.use('/pacientes', routerPaciente)