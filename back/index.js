const express = require('express');
const app = express();
app.use(express.json());
const mysql = require('mysql');
const { OpenAI } = require('openai');
const moment = require('moment');
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const { prompt } = req.body;

    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 50;

    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: prompt}],
        model: model,
        max_tokens: max_tokens
    });

    res.json({completion: completion.choices[0].message.content});
});

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
