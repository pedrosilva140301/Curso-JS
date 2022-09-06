// ARRAYS BÁSICO (lISTA DE COISAS):

// Criando um array:

//                 0       1        2
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)

// Acessar um índice do array:

//                 0       1        2
const alunos1 = ['Luiz', 'Maria', 'João']
console.log(alunos1[2])

// Editar índice dentro do array:

//                 0       1        2
const alunos3 = ['Luiz', 'Maria', 'João']

alunos3[0] = 'Eduardo'
console.log(alunos3)

// Pode adcionar um índice após criar o array:

//                 0       1        2
const alunos4 = ['Luiz', 'Maria', 'João']

alunos4[3] = 'Luiza' // adciona no fim do array
//ou
alunos4.push('Pedro') // adciona no fim do array
//ou
alunos4.unshift('Lucas') // adciona no começo do array
console.log(alunos4)

// Removendo índice do array:

//                 0       1        2
const alunos5 = ['Luiz', 'Maria', 'João']

alunos5.pop() // Remove o último índice
console.log(alunos5)
//ou
const alunos6 = ['Luiz', 'Maria', 'João']

alunos6.shift() // Remove o primeiro índice
console.log(alunos6)

// Saber o tamanho do array:

//                 0       1        2
const alunos7 = ['Luiz', 'Maria', 'João']
console.log(alunos7.length)
//ou, pode contar o array, mesmo adcionando depois
const alunos8 = ['Luiz', 'Maria', 'João']

alunos6[alunos8.length] = 'Luiza'
alunos6[alunos8.length] = 'Fábio'
alunos6[alunos8.length] = 'Luana'
console.log(alunos8.length)

// Fatiar o array:

//                 0       1        2
const alunos9 = ['Luiz', 'Maria', 'João']
console.log(alunos9.slice(0, 3)) 
console.log(alunos9.slice(0, -1))

