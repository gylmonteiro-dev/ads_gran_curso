let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar(){
    tabuleiro = []
    board = document.getElementById("board")
    aviso = document.getElementById("aviso")
    jogador = 1

    for (let linha = 0; linha < 3; linha++){
        tabuleiro[linha] = []
        for (let coluna=0; coluna < 3; coluna++){
            tabuleiro[linha][coluna] = 0
        }
    }
    console.table(tabuleiro)
    exibir()
}

function exibir(){
    let tabela = '<table cellpadding="10" border="1">'

    for(let linha=0; linha < 3; linha++){
        tabela += '<tr>'
        
        for (let coluna=0; coluna <  3; coluna++){
            tabela+= '<td>_</td>'
        }
        tabela += '</tabela>'

        board.innerHTML = tabela
    }

}

function jogar(){
    linha = document.getElementById('linha').value -1
    coluna = document.getElementById('coluna').value -1

}

function checar(){

}

