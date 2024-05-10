const express = require('express');
const app = express();
app.use(express.json());
const mysql = require('mysql');
const moment = require('moment');
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.get('/hello-world', (req, res) => {
    res.send('Hello World')
});

app.listen(3000, () =>  
    console.log('Serviço em execução na porta 3000')
);

app.use((req, res, next) => {
    const currentTime = moment().format();
    const logMessage = `Endpoint ${req.method} ${req.url} acessado em ${currentTime}`;
        pool.query('INSERT INTO tb_logs (logsDeConsultas) VALUES (?)', [logMessage], (err) => {
        if (err) {
            console.error('Erro ao registrar o log:', err);
            return;
        }
        console.log('Log registrado com sucesso:', logMessage);
    });
    next();
});

app.get('/consultar', (req, res) => {
    res.send('Consulta realizada com sucesso')
});

app.listen(4000, () => {
    console.log('Serviço em execução na porta 4000')
});