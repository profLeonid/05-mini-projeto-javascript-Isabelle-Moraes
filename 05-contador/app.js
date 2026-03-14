'use strict'
function gerarContagem() {
    const inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const salto = document.getElementById('salto')
    const lista = document.getElementById('Lista') 

lista.replaceChildren()
for(let i= Number(inicio.value); i<= fim.value; i += Number(salto.value)) {  
    const itemLista= document.createElement('li')

    
    itemLista.textContent = i
    lista.appendChild(itemLista)
}
}