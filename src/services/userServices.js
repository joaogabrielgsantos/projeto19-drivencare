import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from 'uuid';
import userRepositories from "../repositories/userRepositories.js";


async function signup({ name, email, password, typeId, postalCode, cityId }) {
    const { rowCount: userExist } = await userRepositories.findByEmail({ email })
    if (userExist) throw new Error("User already exists")

    const { rowCount: codeExist } = await userRepositories.findPostalCode({ postalCode });

    if (!codeExist) await userRepositories.createAddress({ postalCode, cityId })
    const { rows } = await userRepositories.findPostalCode({ postalCode });
    const addressId = rows[0].id


    const hashPassword = await bcrypt.hash(password, 11)
    await userRepositories.create({ name, email, password: hashPassword, typeId, addressId })

}


async function signin({ email, password }) {

    const { rowCount, rows: [user] } = await userRepositories.findByEmail({ email });
    //console.log(await userRepositories.findByEmail({ email }));
    if (!rowCount) throw new Error("Email or password incorrect")

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new Error("Email or password incorrect")

    const token = uuidV4();

    await userRepositories.createSession({ token, userId: user.id })
    return token


}



export default {
    signup,
    signin
}
