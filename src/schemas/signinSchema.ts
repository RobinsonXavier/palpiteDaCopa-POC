import Joi from 'joi';

const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8)
});

export default signinSchema;