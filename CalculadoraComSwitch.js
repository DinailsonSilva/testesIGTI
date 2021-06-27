var operacao = process.argv[2];// Variavel para declarar o tipo de operação - O process.argv são argumentos que passamos para a linha de comando (parte de baixo) sem ter que alterar o código fonte
var num1 = parseInt (process.argv[3]); // 1° número usado na operação -  o /!\ parseInt uma função que faz a convenção do texto para número 
var num2 = parseInt (process.argv[4]); // 2° número usado na operação

var resultado = 0; // Variavel para ser usada para guardar o resultado da operação  

switch (operacao) {
    case "soma":
        resultado =  num1 + num2
      break;
     case "subtracao":
        resultado =  num1 - num2
      break;
     case "multiplicacao":
        resultado =  num1 * num2
      break;
     case "divisao":
        resultado =  num1 / num2
      break;
     case "resto":
        resultado =  num1 % num2
      break;
     case "porcentagem":
       resultado =  num1 * num2 / 100
      break;
    default : // para caso não encontre nas "case"
       resultado = 0
}

console.log("Resultado: " + resultado)