// Arara é um palindromo, pois se ler detrás para frente
/*
console.log(palavra);
palavra = "jabuti"
console.log(palavra);
*/

// criação da variavel para armazenar a palavra 
var palavra = "arara";
var palavraInvertida = "";

// 3 etapas do for:
//1 - inicialização do contador (só é executado na primeira vez)
//2 - comparação (condição para verificar se código o for ainda deve ser verificado)
//3 - incremento ( incrementa o contador = i + 1)
/*for (var i = 0; i < palavra.length; i++){
    palavraInvertida = palavraInvertida + palavra[i];
}*/

for (var i = palavra.length - 1; i >= 0; i--){
    palavraInvertida = palavraInvertida + palavra[i];
}

 if(palavra === palavraInvertida) {
    console.log(palavra + " é palindromo");
 }else {
   console.log(palavra + " não é palindromo");
 }