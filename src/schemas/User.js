import joi from 'joi';


const userSchema = joi.object({
    name:
        joi
            .string()
            .min(2)
            .required(),
    email:
        joi
            .string()
            .regex(/\S+@\S+\.\S+/)
            .required(),
    password:
        joi
            .string()
            .min(6)
            .required(),
    typeId:
        joi
            .number()
            .integer()
            .min(1)
            .max(2)
            .required(),
    postalCode:
        joi
            .string()
            .required(),
    cityId:
        joi
            .number()
            .integer()
            .min(1)
            .max(5570)
            .required()
    
});


export default userSchema