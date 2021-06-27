console.log("Hello Word no aqrquivo externo!!")

function clickbotao(){
    // DOM - Document Object Model
    // document.getElementById("paragrafoteste").innerHTML="Não esqueça de seguir o meu instagram"//"Texto alterado com sucesso"
    document.getElementById("paragrafoteste").style.display = "none";
    document.getElementsByClassName("paragrafo")
    for (var i = 0 ; 1 < document.getElementsByClassName("paragrafo").length; i++){
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
    }
}

function clickbotao2 (){
    document.getElementById("paragrafoteste").style.display = "block";
    var botoes = document.getElementsByTagName ("button");
    var i = 0;
    while (i < botoes.length){
        botoes[i].style.fontSize = "20px";
        botoes[i].style.color = "red";
        botoes[i].style.fontWeight = "bold";
        i++
    }
}

function ligarLampada() {
    document.getElementById("lampada").src="lampada_ligada.gif";
}

function desligarLampada() {
    document.getElementById("lampada").src ="lampada_desligada.gif";
}

var quantidadeElementos = 0;
function adicionarElemento(){
    var elemento = document.createElement("p");
    elemento.innerHTML = "elemento" + quantidadeElementos;
    quantidadeElementos ++;
    document.getElementById("div-elementos").appendChild(elemento);
}
function removerElemento (){
     var filhos =  document.getElementById("div-elementos").childNodes;
     var size = filhos.length
     for (var i = 0; i < size; i++){
        document.getElementById("div-elementos").removeChild(filhos[0])
     }
}