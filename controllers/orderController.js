import Order from '../models/Order.js';
import Product from '../models/Product.js';
import OrderProduct from '../models/OrderProduct.js';
import User from '../models/User.js';



const calculateTotal = async (products) => {
    let total = 0;
    for (const item of products) {
        const product = await Product.findByPk(item.productId);
        if (product) {
            total += product.price * item.quantity;
        } else {
            throw new Error(`Product with ID ${item.productId} not found`);
        }
    }
    return total;
};

export const createOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const total = await calculateTotal(products);

        const order = await Order.create({
            userId,
            total
        });

        // Validate and create related OrderProduct records
        for (const item of products) {
            const product = await Product.findByPk(item.productId);
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${item.productId} not found` });
            }

            await OrderProduct.create({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity
            });
        }

        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [{
                model: Product,
                through: { attributes: ['quantity'] }
            }]
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: [{
                model: Product,
                through: { attributes: ['quantity'] }
            }]
        });
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const products = req.body.products;
        const total = await calculateTotal(products);

        const updated = await Order.update({
            userId: req.body.userId,
            total: total
        }, {
            where: { id: req.params.id }
        });

        if (updated) {
            // Update products in the order
            await OrderProduct.destroy({ where: { orderId: req.params.id } });
            for (const item of products) {
                await OrderProduct.create({
                    orderId: req.params.id,
                    productId: item.productId,
                    quantity: item.quantity
                });
            }

            const updatedOrder = await Order.findByPk(req.params.id, {
                include: [{
                    model: Product,
                    through: { attributes: ['quantity'] }
                }]
            });
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            await OrderProduct.destroy({ where: { orderId: req.params.id } });
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};