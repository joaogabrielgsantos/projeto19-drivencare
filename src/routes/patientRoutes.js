import { Router } from "express";
import patientControllers from "../controllers/patientControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import patientSchema from "../schemas/Patient.js";

const patientRoutes = Router();


patientRoutes
    .post("/", authMiddleware.authValidation, validateSchema(patientSchema), patientControllers.create);

export default patientRoutes;

