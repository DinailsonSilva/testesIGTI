/*
O "for" tem 03 partes:
1° Expresão inicial que é executada apenas uma vez - var i= 0
2° Parte da comparação -  i < 10
3° Encremento - i++
*/

for (var i= 0 ; i < 10 ; i++) {
 //  console.log(i);
}

var carros = ["Gol" , "Palio" , "Uno" , "Celta", "Sandero"];

// Do começo para o final do Array
for (var i = 0 ; i < carros.length ; i++) { // sempre começar o indice do 0
 //  console.log(carros[i]);
}
// Do final para o começo do array
for (var i = carros.length - 1; i >= 0; i--){ 
 //   console.log(carros[i]);
}

var i = 0
while ( i < carros.length){ // operação mais simples dentro só a estrutura de comparação, tem que ser encremendado por fora
 //   console.log(carros[i]);
    i++;
}
/*
while (true){
  console.log("olá"); // vai imprimir infinitamente 
}
*/
var i = 0;
while ( i < carros.length){
 // console.log(carros[i]);
  if(carros[i] === "Palio"){
  //  console.log("Encontrei o Palio");
    break;
  }
    i++
}
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
while (i < numeros.length){
  var num = numeros[i];
  i++

  if (num % 2 === 0){// Para saber se o número é par
   //  console.log(num + "é par")
     continue; // Faz com que interação não desça, fique voltando para cima e verificando as outras 
  }

  //console.log(num + "é impar")
  //....
}
var j = 30;
do {// Serve para executar pelo menos uma vez, mesmo a comparação sendo falsa, diferente do "while"
j++
console.log(i);
}while (j < 10);

for (var carro of carros){
  console.log(carro);
}
/*
"for of" é o mesmo que:
for (var i = 0; i < carros.length; i++){
  console.log(carros[i]);
}
a diferença é que "for of" não mostra o índice, que no caso  desse exemplo se mostra através do "i"
*/