function inverterString(s){
    // existem formas melhores usando recursos da própria linguagem, 
    // como a função reverse mencionada
    // que não podem ser usados conforme descrito no teste
    let reversedString = "";
    for(let i = (s.length-1); i>=0;i--){
        reversedString = reversedString+ s[i]
    }
    return reversedString;
}

console.log(inverterString("tulio"))