import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt'
import userRepositories from "../repositories/userRepositories.js";


async function signup({ name, email, password, typeId, postalCode, cityId }) {
    const { rowCount: userExist } = await userRepositories.findByEmail({ email })
    if (userExist) throw new Error("User already exists")

    const { rowCount: codeExist } = await userRepositories.findPostalCode({ postalCode });
    //console.log(await userRepositories.findPostalCode({ postalCode }));
    if (!codeExist) await userRepositories.createAddress({ postalCode, cityId })
    const { rows } = await userRepositories.findPostalCode({ postalCode });
    const addressId = rows[0].id


    const hashPassword = await bcrypt.hash(password, 11)
    await userRepositories.create({ name, email, password: hashPassword, typeId, addressId })

}




export default {
    signup,
}
