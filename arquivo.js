// writeFile - serve para criar um arquivo (escrever)
// appendFile - serve para adicionar um conteudo (concatenar)
// ReadFile - serve para ler o conteudo de um arquivo 
// Require - para importar biblioteca 



// 1° parametro do "writeFile" serve para criar o arquivo
// 2° parametro do "writeFile" serve para dizer o que eu quero dentro do arquivo 
// 3° parametro do "writeFile" é uma function de CallBack para caso ocorra um erro
var fs = require ("fs");
fs.writeFile ("meuArquivo.txt", "Parametro para dizer o que eu quero dentro do arquivo", function (err){ //função executada por ultimo 
    if  (err !== null){ // quer dizer que erro é diferente de nulo
        comsole,log(err);
    } else {
        // 1° parametro do "appendFile" serve para sinalizar o arquivo que quero concatenar
        // 2° parametro do "appendFile" serve colocar o novo conteudo
        // 1° parametro do "appendFile" é uma function de CallBack para caso ocorra um erro
        fs.appendFile("meuArquivo.txt", "\n adicionando uma nova linha", function (err) {
            if (err){
                console.log ( err)
            } else {
         // 1° parametro do "readFile" serve para colocar o nome do arquivo que quer ler
         // 2° parametro do "readFile" serve para dizer o formato do arquivo, usar sempre o "utf-8" que é padrão 
         // 3° parametro do "readFile" é uma function que vai ter 2 parametros (erro e data(vem com o conteudo) )
        fs.readFile("meuArquivo.txt", "utf-8", function (err, data){
            if (err){
                console.log(err)
            } else {
                console.log(data)
            }
        });
            }
        })
    }
});

// Poderia ter criado uma variavel para o nome do meu arquivo ex: var nomeDoArquivo = "meuArquivo.txt"