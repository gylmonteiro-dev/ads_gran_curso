function calcular(operacao){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    container_resultado = document.getElementById('resultado')
    
    let resultado = 0

    switch (operacao) {
        case '+':
            resultado = somar(n1,n2)
            break;
        case '-':
            resultado = subtrair(n1,n2)
            break;
        case '*':
            resultado = multiplicar(n1,n2)
            break;
        case '/':
            resultado = dividir(n1,n2)

    }

    container_resultado.innerHTML = `O resultado foi: ${resultado}`
}


const somar = (n1,n2) => {
    return n1 + n2
}

const subtrair = (n1,n2) => {
    return n1 - n2
}

const dividir = (n1,n2) => {
    if (n2 > 0) {
        return n1 / n2
    }
    console.error('Não é possível dividir por 0 o menor que zero')
    return 'N2 não pode ser menor que 0 ou menor que zero'
}

const multiplicar = (n1,n2) => {
    return n1 * n2
}
