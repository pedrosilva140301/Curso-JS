// MAIS SOBRE STRING:

// Pode utilizar aspas duplas dentro das aspas simples:

let umaString = 'Um "texto"' 

// Pegar elemento do texto:

//               01234567
let umaString1= 'Um texto' 

console.log(umaString1[4]) // pedindo o índice 4, que é a letra 'e'
// ou
console.log(umaString1.charAt(4))

// Concatenar strings:

let umaString3= 'Um texto'

console.log(umaString3.concat('',' bem escrito')) // juntando o texto da string com o texto dentro do .concat()

// Pesquisar qual índice está o texto:

//                01234567
let umaString4 = 'Um texto'

console.log(umaString4.indexOf('texto')) // identifica a posição da palavra escrita
// ou
console.log(umaString4.indexOf('t', 4)) // posso definar a posição e pesquisar, a partir de ali, a palavra desejada
// ou
console.log(umaString4.lastIndexOf('U', 4)) // posso definar a posição e pesquisar, a partir de ali, a palavra desejada, porém de trás para frente


// Substituir a palavra dentro do texto:

let umaString5 = 'Um texto'
console.log(umaString5.replace('texto', 'carro'))

// Subistituir a letra:

let umaString6 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString6.replace(/r/, '#')) // substitui só a primeira letra que está selecionada: 'r'
//ou 
console.log(umaString6.replace(/r/g, '#')) // substitui todas as letra que está selecionada: 'r'

// Saber o tamanho da string:

let umaString7 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString7.length)

// Fatiar a palavra:

//                01234567
let umaString8 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString8.slice(2,6)) 
// ou
console.log(umaString8.substring(umaString8.length - 5)) 

//Separar por espaço:

let umaString9 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString9.split(' '))

// Transformar em letra maiúscula e minúscula:

let umaString10 = 'O rato roeu a roupa do rei de roma.'
console.log(umaString10.toUpperCase()) // transforma pra maiúscula
console.log(umaString10.toLowerCase()) // transforma pra minúscula
