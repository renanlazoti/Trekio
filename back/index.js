const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello-world', (req, res) => {
    res.send('Hello World')
});

app.listen(4000, () =>  
    console.log('Serviço em execução na porta 4000')
);