import express from 'express';
import validadorParametro from './functions/validador.js';
import { retornaCalculoIMC, retornaStatusIMC } from './functions/retornaIMC.js';

const app = express();

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (validadorParametro(req.query.peso) && validadorParametro(req.query.altura)) {
        let imc = retornaCalculoIMC(peso, altura);
        let status = retornaStatusIMC(imc);

        res.json({ imc: imc, status: status });
        console.log(req.query);
    } else {
        res.status(400).json({ Erro: 'Peso ou altura inválidos.' });
    }
});

app.listen(8080, () => {
    console.log(`Servidor Iniciado`);
});
