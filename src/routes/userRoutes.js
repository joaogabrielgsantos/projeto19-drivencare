import { Router } from "express";
import { validateSchema } from "../../../projeto19-drivencare_v1(nao_oficial)/src/middlewares/schemaValidationMiddleware.js";
import userControllers from "../controllers/userControllers.js";
import userSchema from "../schemas/User.js";

const userRoutes = Router()


userRoutes
    .get("/status", (req, res) => res.send("OK!"))
    .post("/sign-up", validateSchema(userSchema), userControllers.signup)


export default userRoutes