const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/auth.routes');

require('dotenv').config();

const PORT = process.env.SERV_PORT;
const corsOptions = { origin: "http://localhost:8080" };

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', userRoutes);

app.listen(PORT, () => {
    console.log(`database server runnig on ${process.env.SERV_URL}:${process.env.SERV_PORT}/auth`);
});
