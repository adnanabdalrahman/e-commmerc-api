import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const productInfo = DataTypes.JSONB;
const Order = sequelize.define("Order", {
    products: {
        type:DataTyoes.ARRAY(productInfo),
        allowNull: false,
        validate: {
            isProductArray(value) {
                if (!Array.isArray(value)) {
                    throw new Error('Products must be an array');
                }
                value.forEach(product => {
                    if (typeof product.productId !== 'number' || typeof product.quantity !== 'number') {
                        throw new Error('Each product must have a productId and quantity as numbers');
                    }
                });
            }
        }
    },
    total:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});
sequelize.sync();
export default Order;