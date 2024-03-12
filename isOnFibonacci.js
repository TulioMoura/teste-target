function isOnFibonacci(value){
    let valor_atual =0 
    let valor_anterior=1
    while (valor_atual <= value){
        let soma = (valor_anterior+valor_atual)
        valor_anterior = valor_atual
        valor_atual = soma
    }

    //console.log(valor_atual+ " | " + valor_anterior +" || "+ value)

    if(valor_anterior == value){
        console.log("Este valor pertence à sequencia de fibonacci!")
    }
    else{
        console.log("Este valor não pertence à sequencia de fibonacci!")
    }
    console.log("\n")
}




