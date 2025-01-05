let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar(){
    tabuleiro = new Array(3);
    board = document.getElementById("board");
    aviso = document.getElementById("aviso");
    jogador = 1;

   for (let i=0; i < 3; i++)
    tabuleiro[i] = new Array(3);

   for(let i = 0; i<3; i++)
    for(let j=0;j<3;j++)
        tabuleiro[i][j]=0;

    exibir()
}

function exibir(){
    HTML = '<table cellpadding="10" border="1">';
    for(let i=0;i<3;i++){
        HTML +='<tr>';
        for(let j=0; j<3; j++)
            if(tabuleiro[i][j]==0)
                HTML +='<td>__</td>';
            else
                if(tabuleiro[i][j]==1)
                    HTML +='<td> X </td>';
                else
                    HTML +='<td> 0 </td>';
            HTML += '</tr>';
    }
    HTML += '</table><br>';
    board.innerHTML = HTML

}

function jogar(){
    aviso.innerHTML=`Vez do jogador ${(jogador)%2 + 1} `
    linha = document.getElementById('linha').value -1
    coluna = document.getElementById('coluna').value -1

    if(tabuleiro[linha][coluna]==0)
        if(jogador%2)
            tabuleiro[linha][coluna] = 1;
        else
        tabuleiro[linha][coluna] = -1

        else{
            aviso.innerHTML="Campo já foi marcado"
            jogador--
        }
        jogador++;
        exibir()
        checar()

}

function checar(){

    let soma;

    for(let i=0; i < 3; i++){
        soma=0
        soma=tabuleiro[i][0]+tabuleiro[i][1]+tabuleiro[i][2];

        if (soma==3 || soma==-3)
            aviso.innerHTML=`Jogador ${(jogador)%2 + 1} ganhou! Linha ${i+1} preenchida`
    }

    for(let i= 0; i<3; i++){
        soma=0
        soma=tabuleiro[0][i]+ tabuleiro[1][i] + tabuleiro[2][i]
        if (soma==3 || soma== -3)
            aviso.innerHTML=`Jogador ${(jogador)%2 + 1} ganhou! Coluna ${i+1} preenchida`
    }

    soma=0;
    soma = tabuleiro[0][0]+ tabuleiro[1][1] + tabuleiro[2][2]
    if (soma==3 || soma==-3)
        aviso.innerHTML=`Jogador ${(jogador)%2 + 1} ganhou! Diagona preenchida`

    soma=0;
    soma = tabuleiro[0][2]+ tabuleiro[1][1] + tabuleiro[2][0]
    if (soma==3 || soma==-3)
        aviso.innerHTML=`Jogador ${(jogador)%2 + 1} ganhou! Diagona preenchida`
}

