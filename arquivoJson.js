var fs = require ("fs");
var nomeArquivo = "carros.json"
var carros = ["Gol", "Palio", "Uno", "Celta"];
var concessionaria = {
    nome : "Concessionária Dixdin",
    carros
};
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function (err){ // JSON.stringify serve para converter o objeto em texto
    if (err) {
        console.log(err)
    } else {
        fs.readFile(nomeArquivo, "utf-8", function (err, data){
            if (err){
                console.log(err);
            }else {
                var obj = JSON.parse(data); // JSON.parse(data) serve para converter o texto em objeto
                obj.carros.push("HRV")
                console.log(obj); 
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function (err){ // para salvar o carro que foi adicionado
                    if (err){
                        console.log(err);
                    }
                })
            }
        });
    }
} )