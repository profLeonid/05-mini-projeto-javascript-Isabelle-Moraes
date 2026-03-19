'use strict'

let input = document.getElementById('numero')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')
let corpoTabela = document.getElementById('corpoTabela')

botao.addEventListener('click', function() {
    let numero = Number(input.value)

    resultado.innerHTML = ''
    corpoTabela.innerHTML = ''

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += numero + ' x ' + i + ' = ' + (numero * i) + '<br>'

        let linha = "<tr>" +
                    "<td>" + numero + " x " + i + "</td>" +
                    "<td>" + (numero * i) + "</td>" +
                    "</tr>"

        corpoTabela.innerHTML += linha
    }
})
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        botao.click()
    }
})