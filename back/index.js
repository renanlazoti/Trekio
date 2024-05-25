const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const { OpenAI } = require('openai');
const moment = require('moment');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
            max_tokens: 50
        });
        const resposta = completion.choices[0].message.content;
        res.json({ completion: resposta });
    } catch (error) {
        console.error('Erro ao obter resposta do OpenAI:', error);
        res.status(500).json({ error: 'Erro ao obter resposta do OpenAI' });
    }
});

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

app.post('/salvar-pergunta-resposta', (req, res) => {
    const { pergunta, resposta } = req.body;
    console.log("Recebido para salvar:", { pergunta, resposta });
    
    if (!pergunta || !resposta) {
        return res.status(400).json({ error: 'Pergunta e resposta são obrigatórias' });
    }

    pool.query(
        'INSERT INTO tb_logs (perguntaChatGPT, respostaChatGPT, logsDeEndPoint, logsAcessoData, logsAcessoHora) VALUES (?, ?, ?, ?, ?)', 
        [
            pergunta, 
            resposta, 
            `Endpoint ${req.method} ${req.url}`, 
            moment().format('DD-MM-YYYY'), 
            moment().format('HH:mm:ss')
        ], 
        (err, results) => {
            if (err) {
                console.error('Erro ao salvar pergunta e resposta:', err);
                return res.status(500).json({ error: 'Erro ao salvar pergunta e resposta' });
            }
            res.json({ message: 'Pergunta e resposta salvas com sucesso!' });
        }
    );
});

app.get('/consultar', (req, res) => {
    res.send('Consulta realizada com sucesso');
});

app.listen(4000, () => {
    console.log('Serviço em execução na porta 4000');
});
