function adicionar(idProduto){
    const qtd = document.getElementById(`qtd_${idProduto}`)
    const valor = document.getElementById(`valor_${idProduto}`)
    const total = document.getElementById(`total_${idProduto}`)
    
    // qtd.innerHTML = Number(qtd.textContent) + 1
    qtd.innerHTML++
    const resultado = qtd.innerHTML * valor.innerHTML

    total.innerHTML = parseFloat(resultado.toFixed(4))

    calcular_total()
    
}

function remover(idProduto){
    const qtd = document.getElementById(`qtd_${idProduto}`)
    const valor = document.getElementById(`valor_${idProduto}`)
    const total = document.getElementById(`total_${idProduto}`)
    
    // qtd.innerHTML = Number(qtd.textContent) + 1
    if (qtd.innerHTML == "0"){

        return alert("Não poder ficar negativo")
    }
    qtd.innerHTML--
    const resultado = qtd.innerHTML * valor.innerHTML

    total.innerHTML = parseFloat(resultado.toFixed(4))

    calcular_total()
    
}


function calcular_total(){
    const subtotal = document.getElementById('subtotal')

    let soma = 0
    
    soma +=  Number(document.getElementById("total_1").innerHTML)
    soma +=  Number(document.getElementById("total_2").innerHTML)
    soma +=  Number(document.getElementById("total_3").innerHTML)

    subtotal.innerHTML = parseFloat(soma.toFixed(4))
}