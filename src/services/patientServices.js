import patientRepositories from "../repositories/patientRepositories.js"


async function create({ cpf, userId, tyṕeId }) {


    if (tyṕeId === 1) throw new Error("User is not a patient")


    const { rowCount: patientExist } = await patientRepositories.findByUserId({ userId })
    if (patientExist) throw new Error("Patient already registered")


    await patientRepositories.create({ cpf, userId })


}



export default {
    create,
}
