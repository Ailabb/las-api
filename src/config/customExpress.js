const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //primeira coisa alterada para chegar nesse ponto. mudou a rota para retornar um bem vindo
  app.get("/", (req, res)=> {
    res.send("Bem vindo ao LAS-API");
  });

  consign().include("src/controllers").into(app);

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {// mudar o obj de erro {err}
    //ERRO INTERNO DA APLICAÇÃO
    if(err.erroApp){
      res.status(400).send(err.erroApp);

      //ERRO INTERNO DO SERVIDOR EM AMBIENTE QUE NÃO É DE PRODUÇÃO 
    }else if (ENV === "production") {
      res.status(500).send({ error: err.message });

      //ERRO DO SERVIDOR EM AMBIENTE DE PRODUÇÃO
        } else {
          res.status(500).send({ error: "Algo deu errado..." });
        }   
  });
  return app;
};
