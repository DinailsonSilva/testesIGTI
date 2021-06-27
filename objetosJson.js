/*O JSON é puramente um formato de dados — contém apenas propriedades, sem métodos. ... 
Por exemplo, uma única string ou número seria um objeto JSON válido. 
Ao contrário do código JavaScript no qual as propriedades do objeto podem estar sem aspas, em JSON, somente strings entre aspas podem ser usadas como
*/

var pessoa = {
nome : "Dinailson Pereira", // No JS é opcional se vai colocar as chave como string("") ou não
idade : 23,
telefone : "(98) 98892-7474",
temCarro : false,
animaisDeEstimacao : [ //Array
    "Ohana", 
    "Lilica"
],
pai:{ // Pode colocar um objeto dentro de outro objeto
    nome : "Hilton Silva",
    Idade: 56
}
};
//console.log(pessoa);
//console.log(pessoa.nome); // /!\ O (.) SIGNIFICA  que quer acessar uma propriedade especifica do objeto, nesse caso é o nome
//console.log(pessoa.pai.nome);

pessoa.animaisDeEstimacao.push("Lua" , "Pérola") // Pode-se manipular os objetos também, nesse ex. foi manipulado o array adicionando outro animal atraves da inserção com o "Push"
//console.log(pessoa);
pessoa.nome += " Silva"; // Para encrementar dados de um objeto, nesse caso coloquei mais um sobrenome

pessoa.mae = { // Adicionando propriedade fora do laço
    nome: "Dilze Porto", 
    Idade : 53,
    MaeBiologica : true
} 

//_________________________________________________________________________________________________________________________________________________________________________________
salvarDadosPessoa(pessoa);

function salvarDadosPessoa(pessoa){
    console.log(pessoa);
}

//__________________________________________________________________________________________________________________________________________________________________________________
// Para converter o arquivo para texto "string":

console.log(JSON.stringify(pessoa));