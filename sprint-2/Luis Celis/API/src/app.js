const express = require('express');
const cors = require('cors');
const app = express();


const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const prodRoutes = require('./routes/product');


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/prod', prodRoutes);

module.exports = app;