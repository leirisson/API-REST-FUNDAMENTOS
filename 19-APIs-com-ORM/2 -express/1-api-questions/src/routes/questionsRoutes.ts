import { Router } from "express"
import { QuestionsController } from "../controllers/QuestionsContrllers"

const questionsContrllers = new QuestionsController
export const questionsRoutes = Router()

questionsRoutes.get('/', questionsContrllers.index)
questionsRoutes.post('/', questionsContrllers.create)
questionsRoutes.put('/:id', questionsContrllers.update)
questionsRoutes.delete('/:id', questionsContrllers.remove)