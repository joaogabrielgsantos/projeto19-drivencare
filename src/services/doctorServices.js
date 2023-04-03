import doctorRepositories from "../repositories/doctorRepositories.js"

async function create({ crm, specialtyId, userId, tyṕeId }) {


    if (tyṕeId === 2) throw new Error("User is not a doctor")


    const { rowCount: doctorExist } = await doctorRepositories.findByUserId({ userId })
    if (doctorExist) throw new Error("Doctor already registered")


    await doctorRepositories.create({ crm, specialtyId, userId })


}



export default {
    create,
}