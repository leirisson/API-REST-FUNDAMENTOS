import { TablesSessionController } from "@/controllers/tables-session-controller"
import { Router } from "express"



export const tableSessionsRoutes = Router()

const tableSessionsController  =  new TablesSessionController()

tableSessionsRoutes.get("/", tableSessionsController.index)
tableSessionsRoutes.post("/", tableSessionsController.create)
tableSessionsRoutes.patch("/:id", tableSessionsController.update)
