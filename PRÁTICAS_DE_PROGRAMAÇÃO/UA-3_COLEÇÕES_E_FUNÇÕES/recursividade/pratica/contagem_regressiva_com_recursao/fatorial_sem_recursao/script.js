function regressao(contagem, num){
    console.log(contagem)
    if (num < contagem){
        regressao(--contagem, num)
    }
}


regressao(10,1)