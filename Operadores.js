var soma = 1 + 2;
var subtracao = 5 - 3;
var multiplicacao = 5 * 4;
var divisao = 20 / 4;
var resto = 20 / 3;
// resto da divisão com porcentagem
var restoPorcentagem = 20 % 3;

console.log("soma:" + soma);
console.log("multiplicação:" + subtracao);
console.log("multiplicação:" + multiplicacao);
console.log("divisão:" + divisao);
console.log(" resto da divisão:" + resto);
console.log(" resto da divisão com porcentagem:" + restoPorcentagem);

var num1 = 10;
var num2 = 50;
// "exemplo de um modelo de calculo que não está certo", porque como na matematica o js prioriza a * e /. Tem que colocar ()
var resultadoErrado = num2 + num1 / 8 + 2;
console.log("resltado do calculo - errado:" + resultadoErrado);

// "exemplo de um modelo certo"
var resultadoCerto = (num2 + num1) / (8 + 2);
console.log("resultado do calculo - certo:" + resultadoCerto);

var incremento = 1;
incremento = incremento + 1;
incremento++;
console.log("incremento:" + incremento);

// o mesmo que a = a = 6
var atribuicaoCondicao = 5;
atribuicaoCondicao += 6; 
console.log("Atribuição com adição:" + atribuicaoCondicao);
// decrementando da mesma forma
var decremento = 5;
decremento = decremento - 1;
decremento--;
console.log("decremento:" + decremento);

var atribuicaoComSubtracao = 10;
atribuicaoComSubtracao -= 4; // o mesmo que atribuicaoComSubtracao = atribuicaoComSubtracao -4;
console.log("Atribuição com subtração:" + atribuicaoComSubtracao);

var atribuicaoComMultiplicacao = 5
atribuicaoComMultiplicacao = atribuicaoComMultiplicacao * 5;  // o mesmo que atribuicaoComMultiplicacao *=5
console.log("Atribuição com multiplicação:" + atribuicaoComMultiplicacao)

var atribuicaoComDivisao = 20;
atribuicaoComDivisao = atribuicaoComDivisao / 4; // o mesmo que atribuicaoComDisao /=4
console.log("Atribuição com divisão:" + atribuicaoComDivisao);

var a = 4;
var b = 3;
var adicaoIncrementoPosterior = a + b++; // (b++) atribuiu o valor, mas não calculou na soma
console.log("Adição com incremento posterior:" + adicaoIncrementoPosterior)
console.log(" Valor com incrementado com (b++):" + b)

var adicaoIncrementoAnterior = a + ++b; 
console.log("Adição com incremento anterior:" + adicaoIncrementoAnterior)

var c = 5;
var d = 6;
 
var subtrcaoDecrementoPosterior = c + d--; 
console.log("Subtração com decremento posterior:" + subtrcaoDecrementoPosterior)

var subtrcaoDecrementoAnterior = c + --d; 
console.log("Subtração com decremento anterior:" + subtrcaoDecrementoAnterior)