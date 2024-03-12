function fib(cont){
    if(cont == 0){
        return 0
    }
    else if(cont == 1){
        return 1
    }
    else{
        return fib(cont-1)+ fib(cont -2)
    }
}