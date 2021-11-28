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
    const response = await pool.query('SELECT * FROM product');
    res.status(200).json(response.rows);
}

exports.getByfilter = async (req, res) => {
    const { sole, material, size } = req.body;
    const query = `SELECT * FROM product WHERE sole like '%${sole}%' and material like '%${material}%' and size like '%${size}%'`;
    try {
        const response = await pool.query(query);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(404).json({
            message: 'Error',
            detail: error.detail
        })
    }
}

exports.insert = async (req, res) => {
    const { reference, name, price, sole, material, imageURL, size, category } = req.body;
    try {
        const response = await pool.query('INSERT INTO product (reference, name, price, sole, material, imageURL, size, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [reference, name, price, sole, material, imageURL, size, category]);
        res.status(201).json({
            message: 'Producto creado',
            body: {
                reference,
                name,
                price,
                sole,
                material,
                imageURL,
                size,
                category
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

exports.update = async (req, res) => {
    const { reference, name, price, sole, material, imageURL, size, category } = req.body;
    try {
        const response = await pool.query('UPDATE product SET name = $1, price = $2, sole = $3, material = $4, imageURL = $5, size = $6, category = $7 WHERE reference = $8', [name, price, sole, material, imageURL, size, category, reference]);
        res.status(201).json({
            message: 'Producto actualizado',
            body: {
                reference,
                name,
                price,
                sole,
                material,
                imageURL,
                size,
                category
            }
        })
    } catch (error) {
        res.status(404).json({
            message: 'Fallo al actualizar',
            error
        })
    }
}

exports.delete = async (req, res) => {
    const { reference } = req.body;
    try {
        const response = await pool.query('DELETE FROM product WHERE reference = $1', [reference]);
        if (response.rowCount > 0) {
            res.status(201).json({
                message: 'Producto eliminado'
            })
        } else {
            res.status(404).json({
                message: 'El producto no existe',
            })
        }

    } catch (error) {
        res.status(404).json({
            message: 'No se ha eliminado el producto',
            detail: error.detail
        })
    }
}