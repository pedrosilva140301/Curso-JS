function meuEscopo(){
    const form = document.querySelector('.form') // .form sendo classe e #form sendo id
    const resultado = document.querySelector('.resultado')
    
    const pessoas = []

    function recebeEventoForma(evento){
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForma)

}
meuEscopo()