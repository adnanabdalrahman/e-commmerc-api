import sequelize from "../db/index";
import { DataTypes } from "sequelize";
import Category from "./Category";

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        },
        allowNull: false
    }
}
);

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

Product.sync();
export default Product;
