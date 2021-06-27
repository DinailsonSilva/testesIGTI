/* Funções são blocos de construção fundamentais em JavaScript.
 Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.
 Para usar uma função, você deve defini-la em QUALQUER lugar no escopo do qual você quiser chamá-la.
 */
  function multiplicacao (p1, p2){ // multiplicacao é o titulo da function e p1 e p2 são os parametros que são como se fosses as entradas da function
     console.log( "function multiplicacao executada");
    return p1 * p2 // return é a utilidade que quero dar para os parametros da fuction
 }
 //CHAMANDO A FUNCTION para ela poder imprimir um resultado com base dos parametros
var resultado  = multiplicacao(4, 3);
console.log(resultado);
// console.log(multiplicacao(10, 2)) - se quizer passar a função direto no console.log, pode.

//__________________________________________________________________________________________________________________________________________________________________

function saudacao (nome){
    console.log("Olá " + nome + " seja bem viado!")
}

saudacao("Lucas"); // para chamar a function tem sempre abrir e fechar parenteses 

//_______________________________________________________________________________________________________________________________________________________________

function funcaoSemParametro (){
    var a = 1;  // Essa variavel como foi criada dentro da função só vale dentro da função
    var b = 2;  // Se eu tentar imprimir fora vai dar erro
    console.log(a + b);
}
funcaoSemParametro();
