import { StatusCodes } from "http-status-codes";

export function validateSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false, });

        if (error) {
            return res
                .status(StatusCodes.UNPROCESSABLE_ENTITY)
                .send(error.details.map((detail) => detail.message));
        }
    
        next()
    }
}