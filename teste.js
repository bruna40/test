// Questão 1
function soma(n){
    let soma = 0;
    for (let i = 0; i <n; i++){
        soma += i;
    }
    return soma;
}
console.log(soma(13));

// Questão 2

function fibonacci(n){
    let fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(10));

// Questão 3

function valorMenor() {
    let res = require('./dados.json');
    let menor = res[0].valor;
    let dia = 0;
    for (let i = 0; i < res.length; i++){
        if (res[i].valor < menor && res[i].valor > 0){
            menor = res[i].valor;
            dia = i + 1;
        }
    }
    return `O menor faturamento foi no dia ${dia} e foi de R$ ${menor}`;
}
console.log(valorMenor());

function valorMaior() {
    let res = require('./dados.json');
    let maior = res[0].valor;
    let dia = 0;
    for (let i = 0; i < res.length; i++){
        if (res[i].valor > maior){
            maior = res[i].valor;
            dia = i + 1;
        }
    }
    return `O maior faturamento foi no dia ${dia} e foi de R$ ${maior}`;
}
console.log(valorMaior());

function faturamentoAcimaDaMedia() {
    let res = require('./dados.json');
    let soma = 0;
    for (let i = 0; i < res.length; i++){
        soma += res[i].valor;
    }
    let media = soma / res.length;
    let dias = [];
    for (let i = 0; i < res.length; i++){
        if (res[i].valor > media){
            dias.push(i + 1);
        }
    }
    return `Os dias em que o faturamento foi acima da média foram: ${dias}`;
}

console.log(faturamentoAcimaDaMedia());


// Questão 4

function percentualEstados(){
    const sp = 67836.43;
    const rj = 36678.66;
    const mg = 29229.88;
    const es = 27165.48;
    const outros = 19849.53;

    const total = sp + rj + mg + es + outros;

    const porcentagemSP = (sp / total) * 100;
    const porcentagemRJ = (rj / total) * 100;
    const porcentagemMG = (mg / total) * 100;
    const porcentagemES = (es / total) * 100;
    const porcentagemOutros = (outros / total) * 100;

    return `São Paulo: ${porcentagemSP.toFixed(2)}%
    Rio de Janeiro: ${porcentagemRJ.toFixed(2)}%
    Minas Gerais: ${porcentagemMG.toFixed(2)}%
    Espírito Santo: ${porcentagemES.toFixed(2)}%
    Outros: ${porcentagemOutros.toFixed(2)}%`;
}

console.log(percentualEstados());

// Questão 5

function reverseString(str){
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("Hello World"));