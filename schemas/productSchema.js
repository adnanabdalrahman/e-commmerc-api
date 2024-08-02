import Joi from "joi";
const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    categoryId: Joi.number().required()
});
export default productSchema;
