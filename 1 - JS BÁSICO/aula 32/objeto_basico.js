// OBJETOS BÁSICO:

// Criando obejeto:

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25    
}
console.log(pessoa.nome)

// Criando objeto com função:

function criaPessoa(nome1, sobrenome1, idade1){
    return {
          nome1, sobrenome1, idade1 
    }
}
const pessoa1 = criaPessoa('Pedro', 'Silva', 21)
// posso colocar mais pessoas nesse caso
console.log(pessoa1)

// Usando 'this':

const pessoa2 = {
    nome2: 'Pedro',
    sobrenome2: 'Silva',
    idade2: 22,
    // isso é uma função, porém não precisa de declarar function antes:
    fala() { 
        console.log(`Esta é a minha idade ano que vem: ${this.idade2++}`)
    },
    incrementaIdade(){
        
        this.idade2++
        
        
    }
}
pessoa2.fala()
pessoa2.incrementaIdade(this.idade2)