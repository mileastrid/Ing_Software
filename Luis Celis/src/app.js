const express = require('express');
const cors = require('cors');
const app = express();


const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const prodRoutes = require('./routes/product');
const matRoutes = require('./routes/material');
const provRoutes = require('./routes/proveedor');
const cliRoutes = require('./routes/cliente');
const pedRoutes = require('./routes/pedido');
const pedDetRoutes = require('./routes/pedidodet');
const balRoutes = require('./routes/balance');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/prod', prodRoutes);
app.use('/mat', matRoutes);
app.use('/prov', provRoutes);
app.use('/cli', cliRoutes);
app.use('/ped', pedRoutes);
app.use('/pedDet', pedDetRoutes);
app.use('/bal', balRoutes);

module.exports = app;