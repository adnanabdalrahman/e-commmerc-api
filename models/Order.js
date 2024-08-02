import sequelize from '../db/index.js';
import { DataTypes } from 'sequelize';
import User from './User.js';

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

export default Order;