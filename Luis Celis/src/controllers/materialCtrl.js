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
    const response = await pool.query('SELECT * FROM material');
    res.status(200).json(response.rows);
}

exports.insert = async (req, res) => {
    const { codigo, nombre, color, cantidad, costo, cedula } = req.body;
    try {
        const response = await pool.query('INSERT INTO material (codigo, nombre, color, cantidad, costo, cedula) VALUES ($1, $2, $3, $4, $5, $6)', [codigo, nombre, color, cantidad, costo, cedula]);
        res.status(201).json({
            message: 'Material creado',
            body: {
                codigo, 
                nombre, 
                color, 
                cantidad,
                costo,
                cedula
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
    const { codigo } = req.params;
    try {
        const response = await pool.query('DELETE FROM material WHERE codigo = $1', [codigo]);
        if (response.rowCount > 0) {
            res.status(201).json({
                message: 'Material eliminado'
            })
        } else {
            res.status(404).json({
                message: 'El material no existe',
            })
        }

    } catch (error) {
        res.status(404).json({
            message: 'No se ha eliminado el material',
            detail: error.detail
        })
    }
}