import Product from './Product';
import OrderProduct from './OrderProduct';
import User from "./User.js";
import Order from "./Order.js";


User.hasMany(Order);
Order.belongsTo(User);

// Order-Product relationship
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

// Sync the models
(async () => {
    await sequelize.sync({ force: true }); // Use force: true to recreate the tables if they already exist (useful for testing)
    console.log("Database synced!");
})();
