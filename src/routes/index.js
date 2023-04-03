import { Router } from "express";
import doctorRoutes from "./doctorRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router()

routes
    .use('/', userRoutes)
    .use('/doctors', doctorRoutes)

export default routes