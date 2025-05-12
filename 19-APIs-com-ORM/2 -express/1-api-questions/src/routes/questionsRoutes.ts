import { Router } from "express"
import { QuestionsController } from "../controllers/QuestionsContrllers"

const questionsContrllers = new QuestionsController
export const questionsRoutes = Router()

questionsRoutes.get('/', questionsContrllers.index)