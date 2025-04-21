import { TableController } from "@/controllers/table-controller"
import { Router } from "express"

export const routerTable = Router()

const tableController = new TableController()

routerTable.get('/', tableController.index)