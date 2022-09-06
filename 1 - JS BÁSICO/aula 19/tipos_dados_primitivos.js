// TIPOS DE DADOS PRIMITIVOS: 

// Tipo STRING:

const variavelString = 'nomeVariavelEmString' 
const variavelString1 = "nomeVariavelEmString"
const variavelString2 = `nomeVariavelEmString`

// Tipo NUMBER:

const variavelNumber = 10
const variavelNumber1 = 10.52

// Tipo UNDEFINED:

let variavelUndefined //não aponta para local nenhuma na memória

// Tipo NULL:

const variavelNull = null // não aponta para local nenhuma na memória

// Tipo BOOLEANO (boolean):

const variavelBooleana = true // pode ser true ou false

// Verificar o tipo de variável e o valor:

console.log(typeof nomeDaVariavel, nomeDaVariavel)  //(typeof tipoDaVariavel, valorDaVariavel)

// Variável valendo o valor de outra variável:

let a = 2
const b = a
console.log(a, b) // 'b' vai a passar ter o valor de 'a'

a = 3 // 'a' passa a ter o valor '3', porém 'b' continua tendo o valor antigo de 'a', que é '2'
console.log(a, b) 

/* ....................................................................................................*/

