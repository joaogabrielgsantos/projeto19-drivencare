import { StatusCodes } from "http-status-codes";
import userServices from "../services/userServices.js";

async function signup(req, res) {

    const { name, email, password, typeId, postalCode, cityId } = req.body;

    try {
        await userServices.signup({ name, email, password, typeId, postalCode, cityId })
        return res.sendStatus(StatusCodes.CREATED)

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }

}


async function signin(req, res) {

    const { email, password } = req.body;

    try {
        const token = await userServices.signin({ email, password })
        return res.status(StatusCodes.OK).send({ token })

    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message)
    }



}




export default {
    signup,
    signin
}