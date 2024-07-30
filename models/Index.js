import User from "./User.js";
import Order from "./Order.js";

User.hasMany(Order);
Order.belongsTo(User);

await User.sync();
await Order.sync();