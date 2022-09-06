const num1 = prompt('Digite um número:')

document.body.innerHTML += `Seu número é: ${num1} <br/>`
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num1)} <br/>`
document.body.innerHTML += `${num1} é inteiro: ${Number.isInteger(num1)} <br/>`
document.body.innerHTML += `É NaN: ${Number.isNaN(num1)} <br/>`
document.body.innerHTML += `Arredonando para baixo: ${Math.floor(num1)} <br/>`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num1)} <br/>`
document.body.innerHTML += `Com duas casa decimais: ${num1.toFixed(3)} <br/>`

