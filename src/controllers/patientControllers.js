import { StatusCodes } from "http-status-codes";
import patientServices from "../services/patientServices.js";

async function create(req, res) {

    const { cpf } = req.body;
    const { id, typeId } = res.locals.user;

    try {
        await patientServices.create({ cpf, userId: id, typeId })
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }


}



export default {
    create
}