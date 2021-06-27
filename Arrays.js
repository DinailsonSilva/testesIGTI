var carros =  ["Gol","Palio","Uno"]
console.log(carros)

var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("Primeira posição: " + primeiroCarro)
console.log("Segunda posição: " + segundoCarro)
console.log("Terceira Posiçao: " + terceiroCarro)

/*
Outra opção caso não tivesse tornado o elemento em outra variavel:
console.log("Primeira posição:" + listaDeCarros[0])
console.log("Segunda posição:" + listaDeCarros[1])
console.log("Terceira Posiçao:" + listaDeCarros[2])
*/

carros[2] = "Argo"; // Alterando o elemento UNO pelo ARGO
console.log("Elemento UNO alterado para: " + carros[2]);
console.log(terceiroCarro) // Apesar de ter alterado os elementos, a variavel se mateve a mesma (não perdeu seu valor)

console.log("Tamanho do array: " + carros.length) // A propriedade LENGHT serve para identificar o tamanho do array
console.log("Ultimo elemento do array: " + carros[carros.length - 1]); // O (-1) é porque os elemntos começam a partir de 0 

carros[3] = "Sandero"; // Icluindo mais um elemento sabendo as posições
console.log("Ultimo elemento do array: " + carros[carros.length - 1]);

carros[carros.length] = "Fit"; // para icluir elementos quando não souber as posições
console.log("Ultimo elemento do array: " + carros[carros.length - 1]);

carros.push("Polo"); // Outra forma de incluir elemento sem precisar saber da posição
console.log(carros);