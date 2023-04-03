import { Router } from "express";

const userRoutes = Router()


userRoutes
    .get("/status", (req, res) => res.send("OK!"))


export default userRoutes