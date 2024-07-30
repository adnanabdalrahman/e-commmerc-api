import User from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const createUser = async (req, res) => {
    try {
        const {
            body: {name, email, password},
        } = req;

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({error: 'name , email and password are required'});
        }

        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const {
             params: {id},
         } = req;
         const user = await User.findByPk(id);
         if (!user) return res.status(404).json({error: 'User not found'});
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateUser = async (req, res) => {
    try {
        const {
            body: {name, email, password},
            params: {id},
        } = req;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({error: 'name, email and password are required'});
        }

        const user = await User.findByPk(id);
         if (!user) return res.status(404).json({error: 'User not found'});
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const {
            params: {id},
        } = req;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({error: 'User not found'});
        await user.destroy();
        res.json({message: 'User deleted'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
