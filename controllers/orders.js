import Order from "../models/Order.js";

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const createorder = async (req, res) => {
    try {
        const {
            body: {total, products},
        } = req;

        if (!total || !products) {
            return res
                .status(400)
                .json({error: 'total and pruducts are required'});
        }

        const order = await Order.create(req.body);
        res.json(order);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getOrderById = async (req, res) => {
    try {
        const {
            params: {id},
         } = req;
         const order = await Order.findByPk(id);
         if (!order) return res.status(404).json({error: 'Order not found'});
        res.json(order);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateOrder = async (req, res) => {
    try {
        const {
            body: {total, products},
            params: {id},
        } = req;
        if (!total || !products) {
            return res
                .status(400)
                .json({error: 'total and products are required'});
        }

        const order = await Order.findByPk(id);
         if (!order) return res.status(404).json({error: 'Order not found'});
        await order.update(req.body);
        res.json(order);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const {
            params: {id},
        } = req;
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({error: 'Order not found'});
        await order.destroy();
        res.json({message: 'Order deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
