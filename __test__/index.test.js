const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");//devolve app
const request = supertest(customExpress());
//mapear requisição  no custom 
//primeira coisa alterada para chegar nesse ponto. mudou a rota para retornar um bem vindo

describe("Página Inicial", ()=>{
    test("URL base", async ()=>{
      //precisa fazer uma chamda para o request, e precisrá do obj app para que isso aconteça, feito nas chamadas.
      const resp = await request.get("/");//get na raiz      
      expect(resp.statusCode).toBe(200);
      expect(resp.text).toBe("Bem vindo ao LAS-API");
    });

  
});

