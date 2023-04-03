import joi from 'joi';


const doctorSchema = joi.object({

    crm:
        joi
            .string()
            .required(),
    specialtyId:
        joi
            .number()
            .integer()
            .min(1)
            .max(55)
            .required(),
    userId:
        joi
            .number()
            .integer()
            .required()

});


export default doctorSchema