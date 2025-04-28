import { OrderController } from "@/controllers/orders-controller"
import { Router } from "express"


export const ordersRoutes = Router()

const orderController = new OrderController()


ordersRoutes.post('/', orderController.create)
ordersRoutes.get('/table-session/:table_session_id/total', orderController.show)
ordersRoutes.get('/table-session/:table_session_id', orderController.index)