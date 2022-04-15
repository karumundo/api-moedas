const http = require('http');

const listaDeMoedas = require("./moedas.json");

const app = http.createServer((req , res) =>{
    console.log(listaDeMoedas);
    res.setHeader ("Access-Control-Allow-Origin", '*');
    res.setHeader ("content-type", "aplication-json");
    const respostaEmJson = JSON.stringify(listaDeMoedas);
    
    res.write (respostaEmJson);
    res.end ();
});

app.listen (3000, () => console.log ('servidor iniciado na porta 3000'));
