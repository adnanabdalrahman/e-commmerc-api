import sequelize from '../db/index.js';
import { DataTypes } from 'sequelize';
import Order from './Order.js';
import Product from './Product.js';
const OrderProduct = sequelize.define('OrderProduct', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    }
}, {
    tableName: 'OrderProducts'
});

export default OrderProduct;