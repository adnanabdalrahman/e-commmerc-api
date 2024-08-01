import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";


const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}
);

Category.sync();
export default Category;
