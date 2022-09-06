// MAIS SOBRE NUMBERS:

// Transformar number em string:

let num1 = 1
let num2 = 2.5

console.log(num1.toString() + num2)
console.log(typeof(num1))

// Tranformar em binário:

let num3 = 1500
let num4 = 2.5

console.log(num3.toString(2))

// Arredondar:

let num5 = 10.5789551255547
let num6 = 2.5

console.log(num5.toFixed(2)) // Arredondando duas casas decimais

// Verificar o tipo do número:
// Retornando true ou false

let num7 = 10
let num8 = 2.5

console.log(Number.isInteger(num8)) // Verificando se é inteiro

let temp = num8 * 'Ola'
console.log(Number.isNaN(temp)) // Verificando se é Not a Number
