import joi from 'joi';


const patientSchema = joi.object({

    cpf:
        joi
            .string()
            .required(),
    userId:
        joi
            .number()
            .integer()
            .required()

});


export default patientSchema