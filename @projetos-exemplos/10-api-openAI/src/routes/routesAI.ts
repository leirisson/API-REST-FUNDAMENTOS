import { Request, Response, Router } from "express"
import { createPrompt } from "../utils/openAI"
import { ControllerAi } from '../controller/ControllerAI'

const controllerAI = new ControllerAi
export const routesAI = Router()

routesAI.get('/', controllerAI.getAllResponse)
routesAI.post('/', controllerAI.createPromptAI)
