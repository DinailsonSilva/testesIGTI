var a = 10;
var b = 50;
if (a > b){ // Condição a ser executada caso seja verdadeiro
console.log("a maior do que b");
} else if (b < a) { // Outra opção
console.log("b maior do que a");
}else { // Caso não seja verdadeiro, executa o código abaixo
    console.log("a e b são iguais")
}

if (a > b) {
    console.log("executar somente se a > b")
}
console.log("sempre executar")
//_________________________________________________________________________
// Operadores para comparação
var c = 30;
var d = 30;
if (c >= d){ // maior ou igual
    console.log("c maior ou igual a d")
}
if (d <= c){
    console.log("d menor ou igual a c")
}
//___________________________________________________________________________
var e = 10;
var f = 10;
if (e === f){ // (==) Converte independente de ser número ou texto,  (===) Não converte - /!\ Sempre ultilizar os três operadores para ter certeza que estão comparando certo
    console.log("e é igual a f")
}
//_________________________________________________________________________
var g = 10;
var h = 11; 
if (g !== h){ // Para saber se um elemento é diferente de outro 
    console.log("g diferente de h")
}
//___________________________________________________________________________
// Operadores logicos
 var i = 4;
 var j = 5;
 var k = 5;
 var l = 5;
if ((i >j) && (l > k)) { // operador && equivale a "e", "and" (exige que os dois sejam verdadeiros) - não imprimiu
    console.log("i maior que j")
}if ((i === j) || (k === l)) { // Operador || equivale a "ou" (exige que pelo menos um seja verdadeiro)
    console.log("um dos dois eram validos")
 if (k === 5){ // pode colocar if dentro de if 
     console.log("k igual a 5")
 }
}
console.log(!(1 > 2));
if (!(1 >2)){ // O (!) serve para negar (dizer que é falso) o que está sendo falado, nesse caso dizendo que é falso que 1 > 2, por isso vai ser imprimida 
    console.log("Execute")
}

var fruta = "pera";
var valor = 0;
if (fruta === "banana"){
    valor = 2;
}else if (fruta === "maca"){
    valor = 3
}else if (fruta === "abacaxi"){
    valor = 4
}else if (fruta === "melao"){
    valor = 5;
}else if (fruta === "mamao"){ // esses "else if" equivale a "se (se for maca, se for abacaxi...)"
    valor =5.50;
}else { // para caso não seja nenhuma dessas frutas 
    valor = 10;
}
// console.log("valor:" + valor);

switch (fruta) {// Outra forma de escrever "se"
    case "banana": // case = caso... e os dois pontos tem que ser fora das aspas 
        valor = 2;
         break; // Serve para fechar o "caso" aberto para não sair executando em todos 
    case "maca":
        valor = 3;
         break;
    case "abacaxi":
        valor = 4;
         break;
    case "melao":
        valor = 5;
         break;
    case "mamao":
        valor = 5.50
         break;
    default: // defaut é como se fosse o else final
        valor = 10;
 console.log("valor:" + valor);
}
//________________________________________________________________________
// Operador ternário
var x = 1;
var y = 2;
var resultado = ""
if (x > y) {
    resultado = "x maior que y";
} else {
    resultado ="Se não for"
}
console.log(resultado)


resultado = x > y ? "x maior que y" : "senão"; // mesma coisa que "if" e "else", o "else" nesse caso é os dois pontos
console.log(resultado);