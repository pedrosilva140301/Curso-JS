// FUNÇÕES BÁSICO:

// Criando função:

function nomeFuncao(){
    console.log('Criando Função')
}
nomeFuncao()

// Criando função com parâmetros:

function nomeFuncao1(nome){
    console.log(`Criando ${nome}`)
}
nomeFuncao1('Funções')

// Retornar valor da função:

function nomeFuncao3(nome){
    return `Criando ${nome}`
}
const funcao = nomeFuncao3('funções')
console.log(funcao)

// Mais exemplos:

function somaResultado(x, y){
    const resultado = x + y
    return resultado
}
console.log(somaResultado(2, 2))
//ou 
function somaResultado1(x1, y1){
    const resultado1 = x1 + y1
    return resultado1
}
const resultado1 = somaResultado(2, 2)
console.log(resultado1)

// Pode colocar uma função dento de uma variável:

const raiz = function(n){
    return Math.sqrt(n)
}
console.log(raiz(9))

// Arrow Function -> é considerado uma função:

const raiz1 = n => Math.sqrt(n)
console.log(raiz1(9))

