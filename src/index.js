import express from 'express';
import validadorParametro from './functions/validador.js';
import { retornaCalculoIMC, retornaStatusIMC } from './functions/retornaIMC.js';

const app = express();

app.get('/', (req, res) => {
    const { peso, altura } = req.query;

    if (validadorParametro(peso) && validadorParametro(altura)) {
        let imc = retornaCalculoIMC(peso, altura);
        let status = retornaStatusIMC(imc);

        return res.json({ imc: imc, status: status });
    }

    return res.status(400).json({ Erro: 'Peso ou altura inválidos.' });
});

app.listen(8080, () => {
    console.log(`Servidor Iniciado`);
});
