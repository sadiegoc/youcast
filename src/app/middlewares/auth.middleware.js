const jwt = require('jsonwebtoken');
const Auth = require('../models/auth.model');

require('dotenv').config();

const protect = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            await Auth.getUserById(decoded.indexOf, (err, result) => {
                if (result.length > 0) next();
            });
        } catch (err) {
            return res.status(401).json({ message: 'invalid token' });
        }
    } else return res.status(401).json({ message: 'without token' });
};

module.exports = { protect };