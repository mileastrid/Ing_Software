const { Pool } = require('pg');
const keys = require('../utils/keys');
const url = require('url');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
exports.find = async (req, res, next) => {
    const username = req.body.username;
    const response = await pool.query('SELECT * FROM users WHERE username=$1', [username]);
    if(response.rowCount>0){
        req.body.users = response.rows;
    }
    next();
}

exports.signin = async (req, res) => {
    if (!req.body.users) return res.status(404).send({ message: 'NOT FOUND!' });
    let user = req.body.users[0];
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
        jwt.sign({ user }, 'privateKey', function (err, token) {
            res.status(200).send({ token })
        });
    } else {
        res.send({ message: 'Invalid credentials' })
    }
}
