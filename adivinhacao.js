/* Criar um jogo no qual o jogador tenha que adivinhar  um número. O jogo deve gerar um número de 1 e 100, e depois desafiar o jogador 
a descobrir qual o número em no máximo 10 tentativas. Cada tentativa, caso o jogador não tenha acertado, o jogo deve informar se o número 
informado é maior ou menor que o número sorteado. O jogo terminbar se o jogador acertar ou se acabar as 10 tentativas.

1° gerar número aleatoria entre 1 e 100
2° inicializar o número de tentativa com 10
3° Pedir para o jogador tentar adivinhar o número 
4° decrementar o número de tentativas 
5° verificar se a tentativa está correta
6° se estiver correta: Informar que acertou o número e encerrar o jogo
7° se estiver incorreto e acabaram as tentativas: informar que ele não venceu e encerrar o jogo
8° se estiver incorreto e ainda tiver tentativas: informar se o número informado é maior ou menor que o número sorteado e pedir outra tentativa para o jogador
*/
var readline = require ("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var numeroAleatorio = Math.round(Math.random() * 100); // "Math.random" - biblioteca que sortea número aleatorio de 0 a 1, por isso fou * 100 e "Math.round" arredonda o número
if (numeroAleatorio === 0 ){
    numeroAleatorio = 1;
}

var numeroTentativas = 10;


pergunta();
function pergunta(){
rl.question("Digite um número:  ", function (numero){
    numero = parseInt(numero); // converti para número 
    numeroTentativas --; // = numeroTentativas - 1
    if (numero === numeroAleatorio){
        console.log("Parabéns, você acertou o número!!!");
        rl.close(); // para encerar, porque acertou o número 
    }else if (numeroTentativas === 0) {
        console.log("Número de tentativas acabaram.");
        rl.close();
    }else if (numero > numeroAleatorio) {
        console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas." + " Você informou um número maior que o sorteado, informe um número menor.")
        pergunta();
    }else {
        console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas." + " Você informou um número menor que o sorteado, informe um número maior.")
        pergunta();
    }
});
}