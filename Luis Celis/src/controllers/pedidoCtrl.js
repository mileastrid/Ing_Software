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

exports.getAll = async (req, res) => {
    const response = await pool.query('SELECT * FROM pedido');
    res.status(200).json(response.rows);
}

exports.insert = async (req, res) => {
    const { cedula, total, fecha } = req.body;
    try {
        const response = await pool.query('INSERT INTO pedido (cedula, total, fecha) VALUES ($1, $2, $3) RETURNING id', [cedula, total, fecha]);
        res.status(201).json({
            message: 'Pedido creado',
            body: {
                cedula, 
                total, 
                fecha,
                response: response.rows
            }
        })
    } catch (error) {
        res.status(404).json({
            message: 'Fallo al crear',
            detail: error.detail,
            error
        })
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await pool.query('DELETE FROM pedido WHERE id = $1', [id]);
        if (response.rowCount > 0) {
            res.status(201).json({
                message: 'Pedido eliminado'
            })
        } else {
            res.status(404).json({
                message: 'El pedido no existe',
            })
        }

    } catch (error) {
        res.status(404).json({
            message: 'No se ha eliminado el pedido',
            detail: error.detail
        })
    }
}