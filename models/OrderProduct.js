import sequelize from '../db/index.js';
import { DataTypes } from 'sequelize';

const OrderProduct = sequelize.define('OrderProduct', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

export default OrderProduct;