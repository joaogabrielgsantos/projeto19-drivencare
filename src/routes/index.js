import { Router } from "express";
import doctorRoutes from "./doctorRoutes.js";
import patientRoutes from "./patientRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router()

routes
    .use('/', userRoutes)
    .use('/doctors', doctorRoutes)
    .use('/patients', patientRoutes)

export default routes