// Para saber se o número é primo.

var  numero = 10;
var numeroPrimo = true;
for (var i = 2; i < numero; i++){
    if (numero % i === 0){
        numeroPrimo = false
        break
    }
}
if (numeroPrimo){
    console.log("O número é: " + numero + " é primo.");
}else {
    console.log("O número: " + numero + " não é primo.");
}