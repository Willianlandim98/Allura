// Criar uma função que exibe "Olá, mundo!" no console.

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function saudação() {
    console.log('Olá, mundo!');
}
saudação();



function cumprimentar(nome) {
    console.log(`Olá, ${nome}!`);
}
cumprimentar('Willian')



function dobrarNumero(numero) {
    return numero * 2;
}
let resultado = dobrarNumero(2)
console.log(resultado)



function mediaNumerica(numb1, numb2, numb3) {
    return (numb1 + numb2 + numb3) / 3
}
let media = mediaNumerica(6, 3, 3)
console.log(`A media dos valores são ${media}`)



function numeroMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1
    }
    else {
        return numero2
    }
}
const maior = numeroMaior(10, 3)
console.log(maior)



function multiplicação(numero){
    return numero * numero
}
let result = multiplicação(5)
console.log (result)