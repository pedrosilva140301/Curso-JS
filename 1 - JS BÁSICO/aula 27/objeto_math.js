// OBJETO MATH:

// Arredondar para baixo:

let num1 = 9.64578
let num2 = Math.floor(num1)
console.log(num2)

// Arredondar para cima:

let num3 = 9.44578
let num4 = Math.ceil(num3)
console.log(num4)

// Arredonda automático:

let num5 = 9.44578
let num6 = Math.round(num5)
console.log(num6)

// Identificar qual o maior número:

console.log(Math.max(1, 2, 5, 63, 342, 152342, 2242, -412, -2432, -2342424))

// Identificar qual o menor número:

console.log(Math.min(1, 2, 5, 63, 342, 152342, 2242, -412, -2432, -2342424))

// Gerar número aleatório:
// Entre 0 e 1
console.log(Math.random())
// Entre qualquer número
const aleatorio = Math.random() * (10 - 5) + 5 // Gerando número entre 10 e 5
console.log(aleatorio)

// Potenciação:

console.log(Math.pow(2, 10)) // Mesma coisa de: console.log(2 ** 10)