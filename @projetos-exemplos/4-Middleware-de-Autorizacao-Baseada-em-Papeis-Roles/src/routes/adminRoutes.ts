


import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware";
import { authorizeMiddleware } from "../middlewares/authorizeMiddleware";


import {AdminController} from '../controller/AdminController'

const adminController = new AdminController

export const  routesAdmin = Router()

routesAdmin.get('/', authMiddleware, authorizeMiddleware('admin'), adminController.getAll)