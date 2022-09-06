// OPERADORES ARITIMÉTICOS:
// OBS: 
// NaN -> not a number

// Operador de adição / concatenação = '+'

const num1 = 5
const num2 = 10
console.log(num1 + num2) // Adição das duas variáveis do tipo number

const num3 = '5'
const num4 = 10
console.log(num3 + num4) // Concatenação, ou seja, junção dos dois tipos de variáveis (string + number)

// Operador de subtração = '-'

const num5 = 5
const num6 = 10
console.log(num5 - num6)

// Operador de multiplicação = '*'

const num7 = 5
const num8 = 10
console.log(num7 * num8)

// Operador de divisão = '/'

const num9 = 5
const num10 = 10
console.log(num9 / num10)

// Operador de potenciação = '**'

const num11 = 5
const num12 = 10
console.log(num11 ** num12)
//ou
let contador5 = 2
contador5 **= 10
console.log(contador5)

// Operador de resto da divisão = '%'

const num13 = 5
const num14 = 10
console.log(num13 % num14)

/* ....................................................................................................*/


// Operador de incremento = 'variável++' ou '++variável'

let contador = 1
contador++
console.log(contador)

// A diferença de antes e depois: 
// Antes, ele vai fazer a soma de 1 e depois ele vai executar o resultado
// Depois, ele vai mostrar o resultado, somando mais 1 também, porém ele não mostrar somado com 1
// Caso seja assim:

let contador2 = 1
console.log(contador2++)
//ou
console.log(++contador2)

// Operador de decremento = 'variável--' ou '++variável'

let contador1 = 1
contador1--
console.log(contador1)

// A diferença de antes e depois: 
// Antes, ele vai fazer a subtração de 1 e depois ele vai executar o resultado
// Depois, ele vai mostrar o resultado, subtraindo mais 1 também, porém ele não mostrar subtraído com 1
// Caso seja assim: 

let contador3 = 1
console.log(contador3--)
//ou
console.log(--contador3)

// Outra maneira de incremento:

const passo = 50
let contador4 = 0
// contador = contador + passo:
contador += passo // valor passa a ser 50
contador += passo // valor passa a ser 100 
contador += passo // valora passa a ser 150
console.log(contador4)

// Convertendo string em number: 

const num15 = 10
const num16 = parseInt('5') // Irá converter para número inteiro
const num17 = parseFloat('5.2') // Irá converter para número com vírgula
const num18 = Number('5') // Irá detectar o tipo do número e converter
console.log(num15 + num16)  

/* ....................................................................................................*/
