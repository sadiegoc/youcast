const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

require('dotenv').config();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};

exports.register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ message: 'username or password cannot be empty' });

    try {
        await Auth.getUserByUsername(username, async (err, result) => {
            if (err) return res.status(500).json({ message: 'error to access database' });

            if (result.length === 0) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);

                const userToSave = { username: username, password: hashedPassword };

                await Auth.createUser(userToSave, (err, result) => {
                    if (err) return res.status(500).json({ message: 'error to save user' });

                    const token = generateToken(result.insertId);
                    const resp = { id: result.insertId, username, token };
                    return res.status(200).json(resp);
                });
            } else return res.status(401).json({ message: 'this username already exists' });
        });
    } catch (err) {
        return res.status(500).json({ message: 'error to save user' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ message: 'username or password cannot be empty' });

    try {
        await Auth.getUserByUsername(username, async (error, result) => {
            if (error) return res.status(400).json({ message: 'error to find user' });
            if (result.length === 0) return res.status(401).json({ message: 'username or password are incorrects' });

            const validPassword = await bcrypt.compare(password, result[0].password);
            if (!validPassword) return res.status(401).json({ message: 'username or password are incorrects' });

            const token = generateToken(result[0].id);
            const resp = { id: result[0].id, username: result[0].username, token };
            return res.status(200).json(resp);
        });
    } catch (err) {
        return res.status(500).json({ message: 'server error' });
    }
};