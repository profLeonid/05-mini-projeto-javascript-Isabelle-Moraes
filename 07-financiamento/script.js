'use strict'

let valorInput = document.getElementById('valor')
let jurosInput = document.getElementById('juros')
let parcelasInput = document.getElementById('parcelas')
let parcelaInput = document.getElementById('parcela')
let botao = document.getElementById('botao')
let corpoTabela = document.getElementById('corpoTabela')

// Clique no botão
botao.addEventListener('click', calcular)

// Enter nos inputs
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        calcular()
    }
})

function calcular() {
    let valor = Number(valorInput.value)
    let taxa = Number(jurosInput.value)
    let parcelas = Number(parcelasInput.value)
    let parcela = Number(parcelaInput.value)

    let saldo = valor
    corpoTabela.innerHTML = ''

    for (let i = 1; i <= parcelas; i++) {

    let jurosMes = saldo * (taxa / 100)
    let totalMes = jurosMes + parcela
    saldo = saldo + jurosMes - parcela

    let linha = `
    <tr>
        <td>${i}</td>
        <td class="col-juros">R$ ${jurosMes.toFixed(2)}</td>
        <td>R$ ${parcela.toFixed(2)}</td>
        <td class="col-total">R$ ${totalMes.toFixed(2)}</td>
        <td class="col-saldo">R$ ${saldo.toFixed(2)}</td>
    </tr>
    `

    corpoTabela.innerHTML += linha

    if (saldo <= 0) break
}
}