import Joi from 'joi';

const signupSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8)
});

export default signupSchema;