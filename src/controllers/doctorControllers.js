import { StatusCodes } from "http-status-codes";
import doctorServices from "../services/doctorServices.js";

async function create(req, res) {

    const { crm, specialtyId } = req.body;
    const { id, typeId } = res.locals.user;

    try {
        await doctorServices.create({ crm, specialtyId, userId: id, typeId })
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }

}


export default {
    create,
}