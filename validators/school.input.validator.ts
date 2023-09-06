import Joi from "joi";

const userSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default userSchema;
