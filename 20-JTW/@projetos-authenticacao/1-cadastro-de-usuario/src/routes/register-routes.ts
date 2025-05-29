import { Router } from "express";

import { RegisterController } from '../controller/register-controller'

const registercontroller = new RegisterController()
export const registerRroutes = Router()


registerRroutes.post('/', registercontroller.register)