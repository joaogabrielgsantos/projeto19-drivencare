import joi from 'joi';


const patientSchema = joi.object({

    cpf:
        joi
            .string()
            .required()

});


export default patientSchema