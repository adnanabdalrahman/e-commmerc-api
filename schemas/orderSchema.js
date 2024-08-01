import joi from 'joi';

const orderSchema = joi.object({
     products: joi.array().items(joi.object({
            productId: joi.number().required(),
            quantity: joi.number().required(),
        })).required(),
    total: joi.number().required(),
});
export default orderSchema;