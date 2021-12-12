const { Pool } = require('pg');
const keys = require('../utils/keys');
const url = require('url')
const bcrypt = require('bcrypt');
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

exports.getUsers = async (req, res) => {
    const response = await pool.query('SELECT username, name, email, rol FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

exports.create = async (req, res) => {
    const {username, name, password, email} = req.body;
    const pswHash = bcrypt.hashSync(password, 10);
    const response = await pool.query('INSERT INTO users (username, name, password, email) VALUES ($1, $2, $3, $4)', [username, name, pswHash, email]);
    console.log(response);
    res.status(201).json({
        message: 'Created',
        body: {
            user:{
                username, 
                name, 
                email
            }
        }
    })
}

exports.delete = async (req, res) => {
    const { username } = req.params;
    try {
        const response = await pool.query('DELETE FROM users WHERE username = $1', [username]);
        if (response.rowCount > 0) {
            res.status(201).json({
                message: 'Operador eliminado'
            })
        } else {
            res.status(404).json({
                message: 'El operador no existe',
            })
        }

    } catch (error) {
        res.status(404).json({
            message: 'No se ha eliminado el operador',
            detail: error.detail
        })
    }
}