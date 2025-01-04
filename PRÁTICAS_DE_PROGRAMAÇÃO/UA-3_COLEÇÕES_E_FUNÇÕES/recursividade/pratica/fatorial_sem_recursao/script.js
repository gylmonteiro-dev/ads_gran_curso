function fatorial(n){
    let tempFatorial = n
    
    for (let contador = n; contador >= 1; contador-- ){
        let antecessor  = contador -1
        if (antecessor > 0){
            
            tempFatorial *= antecessor
        }
    }
    return tempFatorial
}


console.log(fatorial(1))