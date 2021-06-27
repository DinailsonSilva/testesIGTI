var operacao = process.argv[2];// Variavel para declarar o tipo de operação - O process.argv são argumentos que passamos para a linha de comando (parte de baixo) sem ter que alterar o código fonte
var num1 = parseInt (process.argv[3]); // 1° número usado na operação -  o /!\ parseInt uma função que faz a convenção do texto para número 
var num2 = parseInt (process.argv[4]); // 2° número usado na operação

var resultado = 0; // Variavel para ser usada para guardar o resultado da operação  

if (operacao === "soma"){
    resultado = num1 + num2;
}
else if (operacao === "subtracao"){ // else If também serve par economizar processamento, para não ter que vrificar tudo, se for a operação pedida o else if para nela
    resultado = num1 - num2;
}
else if (operacao === "multiplicacao"){
    resultado = num1 * num2;
}
else if (operacao === "divisao"){
    resultado = num1 / num2;
}
else if (operacao === "resto"){ // Se for um calculo que não tenha resto vai imprimir 0
    resultado = num1 % num2;
}
else if (operacao === "porcentagem"){
    resultado = num1 * num2 / 100;
}


console.log("Resultado: " + resultado)