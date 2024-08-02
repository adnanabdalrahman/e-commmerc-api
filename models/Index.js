import sequelize from '../db/index.js';
import User from './User.js';
import Order from './Order.js';
import Product from './Product.js';
import OrderProduct from './OrderProduct.js';

// Define relationships
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'productId' });
Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'orderId' });

// Sync models
(async () => {
    await sequelize.sync({ force: true }); // Use force: true to recreate tables
    console.log("Database synced!");
})();