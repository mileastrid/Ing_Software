const { Pool } = require('pg');
const keys = require('../utils/keys');
const url = require('url');
const params = url.parse(keys.DB2);
const auth = params.auth.split(':');

const pool = new Pool({
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
});

exports.balanceMateriales = async (req, res) => {
    const response = await pool.query('SELECT sum(costo) FROM material');
    res.status(200).json(response.rows);
}

exports.balancePedidos = async (req, res) => {
    const response = await pool.query('SELECT sum(total) FROM pedido');
    res.status(200).json(response.rows);
}