const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/authorization', protect, (req, res) => {
    return res.status(200).json({ message: 'ok' });
});

module.exports = router;