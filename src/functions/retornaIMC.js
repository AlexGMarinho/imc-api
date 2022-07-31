import imcRefeito from './imcRefeito.js';

function retornaCalculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let imcNovo = imcRefeito(imc);

    return imcNovo;
}

function retornaStatusIMC(imc) {
    let status;

    if (imc < 18.5) {
        status = 'abaixo do Peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        status = 'peso normal';
    } else if (imc >= 24.9 && imc < 30) {
        status = 'acima do peso';
    } else {
        status = 'obeso';
    }

    return status;
}
export { retornaCalculoIMC, retornaStatusIMC };
