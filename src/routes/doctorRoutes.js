import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import doctorSchema from "../schemas/Doctor.js";

const doctorRoutes = Router();

doctorRoutes.post("/", authMiddleware.authValidation, validateSchema(doctorSchema), doctorControllers.create);

export default doctorRoutes;