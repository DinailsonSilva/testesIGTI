// pop -  serve para remover o ultimo elemento do array.
// push - serve para inserir um elemento na última posição do array
// shift - serve para tirar o primeiro elemento do array e atualizar (puxar) os outros índices
// unshift - serve para adicionar um elemento no inicio do array e atualizar (empurrar) os outros índices 
// delete -  serve para deletar um elemento do índice informado do Array, mas não coloca nada no lugar dele, deixando um buraco. 
// splice - serve para adicionar ou remover (sem deixar um buraco) um elemento no array
// concat – serve para concatenar(juntar) os arrays em uma nova
// slice -  retorna uma parte de um array em um novo array, sem alterar o array original 


var carros = [ "Gol", "Palio", "Uno", "Sandero" ];
var carro = carros.pop (); // Para tirar o último elemento e colocar ele numa variável (colocar em uma variável é opcional)

/*
console.log ( carro ); // Vai imprimir apenas o último elemento
console.log ( carros ); // Vai imprimir sem o último elemento
*/

//___________________________________________________________________________________________

var x =  carros.push (  "Ford Ka" ); // “var x” para ver o novo tamanho do array (opcional)
// console.log ( x );
// console.log ( carros );

//____________________________________________________________________________________________

carros.shift (); // Pode colocar uma variável também (
// console.log (carros)

//____________________________________________________________________________________________

carros.unshift ( "Ônix" ); 
// console.log ( carros );

//____________________________________________________________________________________________

// PARA ALTERAR ELEMENTO PELO ÍNDICE DA ARRAY:  
carros  [2] = "Novo Uno";
console.log ( carros );

//______________________

/*
 delete carros [1];
 console.log ( carros );
*/

//_____________________
// 1 – parâmetro para definir a posição dos novos elementos 
// 2 – parâmetro  para definir quantos elementos tem que ser removidos 
// 3 – pode colocar quantos elementos quiser 

carros.splice ( 2, 0, "HRV", "Creta" );
console.log ( carros);

carros.splice ( 2, 1 ); // Removendo o elemento “HRV” da array
console.log ( carros );

//______________________

var carrosAntigos =  [ "Brasília", "Monza", "Fusca" ];
var todosCarros = carros.concat ( carrosAntigos );
console.log ( todosCarros );

//_______________________

// 1 – parâmetro para definir de onde vai começar a pegar os elementos
// 2 – parâmetro  para definir até onde vai pegar os elementos, porém não entrando na array

var novoArray = todosCarros.slice ( 2, 5 );
console.log ( novoArray );