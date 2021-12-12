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
    const response = await pool.query('SELECT * FROM cliente');
    res.status(200).json(response.rows);
}

exports.insert = async (req, res) => {
    const { nombre, cedula, celular, empresa } = req.body;
    try {
        const response = await pool.query('INSERT INTO cliente (nombre, cedula, celular, empresa) VALUES ($1, $2, $3, $4)', [nombre, cedula, celular, empresa]);
        res.status(201).json({
            message: 'Cliente creado',
            body: {
                nombre, 
                cedula, 
                celular, 
                empresa
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
    const { cedula } = req.params;
    try {
        const response = await pool.query('DELETE FROM cliente WHERE cedula = $1', [cedula]);
        if (response.rowCount > 0) {
            res.status(201).json({
                message: 'Cliente eliminado'
            })
        } else {
            res.status(404).json({
                message: 'El cliente no existe',
            })
        }

    } catch (error) {
        res.status(404).json({
            message: 'No se ha eliminado el cliente',
            detail: error.detail
        })
    }
}