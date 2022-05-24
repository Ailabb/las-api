const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");//devolve app
const request = supertest(customExpress());
//const usuarios = require("../src/repositorios/__mocks__/usuraios.json");

jest.mock("../src/repositorios/usuario");

describe("API de Usuários", ()=>{
    test("Listar usuários", async ()=>{      
      const resp = await request.get("/usuarios");  
      expect(resp.statusCode).toBe(200);
      expect(resp.body).toEqual([ {
        "id":1,
        "nome":"Paulo",
        "urlFotoPerfil":"https://randomuser.me/api/portraits/men/91.jpg",
        "nomecompleto":"Paulo Morais",
        "dataNascimento":"1988-10-15T03:00:00.000Z",
        "rg":"1547859654",
        "cpf":"12347895632",
        "cep":"45875963",
        "endereco":"Rua b",
        "numero":4,
        "complemento":"Apartamento 150",
        "bairro":"Paraíso",
        "telefone":"7133548975",
        "celular":"71987568456",
        "email":"paulom@email.com",
        "senha":"1548P",
        "documento":"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
    },
        {
            "id":2,
            "nome":"Paulo M",
            "urlFotoPerfil":"https://randomuser.me/api/portraits/men/92.jpg",
            "nomecompleto":"Paulo Mota",
            "dataNascimento":"1988-10-15T03:00:00.000Z",
            "rg":"1315187951",
            "cpf":"74125896365",
            "cep":"72980000",
            "endereco":"Rua 123",
            "numero":23,
            "complemento":"Apartamento 509",
            "bairro":"Zona Norte",
            "telefone":"6233311212",
            "celular":"62998757575",
            "email":"foobar@gmail.com",
            "senha":"admin",
            "documento":"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
        },
        {
            "id":3,
            "nome":"Maria",
            "urlFotoPerfil":"https://randomuser.me/api/portraits/men/95.jpg",
            "nomecompleto":"Maria Fernanda Barbosa",
            "dataNascimento":"1992-05-20T03:00:00.000Z",
            "rg":"1315187845",
            "cpf":"74125878523",
            "cep":"72980000",
            "endereco":"Rua 123",
            "numero":60,
            "complemento":"casa rosa",
            "bairro":"Zona sul",
            "telefone":"6233648795",
            "celular":"62987456125",
            "email":"foobar2@gmail.com",
            "senha":"Pja1254*",
            "documento":"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
        },
        {
            "id":5,
            "nome":"Antonia",
            "urlFotoPerfil":"https://randomuser.me/api/portraits/men/97.jpg",
            "nomecompleto":"Antonia Fagundes Moreira",
            "dataNascimento":"1978-12-05T03:00:00.000Z",
            "rg":"1305759458","cpf":"75395145698",
            "cep":"41162042","endereco":"Rua Sul",
            "numero":5,
            "complemento":"Casa Amarela",
            "bairro":"Vasco",
            "telefone":"2133625548",
            "celular":"78986542594",
            "email":"lala@hotmail.com",
            "senha":"1215Pi",
            "documento":"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
        }]);
    });
    test("Buscar Usuário por ID existente", async ()=>{      
      const resp = await request.get("/usuarios/2");  
      expect(resp.statusCode).toBe(200);
      expect(resp.body).toEqual(
        {
            "id":2,
            "nome":"Paulo M",
            "urlFotoPerfil":"https://randomuser.me/api/portraits/men/92.jpg",
            "nomecompleto":"Paulo Mota",
            "dataNascimento":"1988-10-15T03:00:00.000Z",
            "rg":"1315187951",
            "cpf":"74125896365",
            "cep":"72980000",
            "endereco":"Rua 123",
            "numero":23,
            "complemento":"Apartamento 509",
            "bairro":"Zona Norte",
            "telefone":"6233311212",
            "celular":"62998757575",
            "email":"foobar@gmail.com",
            "senha":"admin",
            "documento":"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
        });      
    });
    test("Buscar Usuário por ID inexistente", async ()=>{      
      const resp = await request.get("/usuarios/98");  
      expect(resp.statusCode).toBe(404);
    });
    test("Adicionar usuário com dados válidos", async ()=>{      
      const resp = await request.post("/usuarios").send({
        "nome": "Fernanda",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/men/98.jpg",
        "nomecompleto": "Fernanda Valente Souza",
        "dataNascimento": "1986-01-28T02:00:00.000Z",
        "rg": "121514196254",
        "cpf": "75694825845",
        "cep": null,
        "endereco": "Rua da Esperança",
        "numero": 121,
        "complemento": "casa vermelha",
        "bairro": "Nova esperança",
        "telefone": "6233311212",
        "celular": "62998757575",
        "email": "foobar@gmail.com",
        "senha": "admin",
        "documento": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
      });  
      expect(resp.statusCode).toBe(201);
      expect(resp.body).toEqual({
        "id": 6,
        "nome": "Fernanda",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/men/98.jpg",
        "nomecompleto": "Fernanda Valente Souza",
        "dataNascimento": "1986-01-28T02:00:00.000Z",
        "rg": "121514196254",
        "cpf": "75694825845",
        "cep": null,
        "endereco": "Rua da Esperança",
        "numero": 121,
        "complemento": "casa vermelha",
        "bairro": "Nova esperança",
        "telefone": "6233311212",
        "celular": "62998757575",
        "email": "foobar@gmail.com",
        "senha": "admin",
        "documento": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
      });

    });

});

/*{
  "id": 6,
  "nome": "Fernanda",
  "urlFotoPerfil": "https://randomuser.me/api/portraits/men/98.jpg",
  "nomecompleto": "Fernanda Valente Souza",
  "dataNascimento": "1986-01-28T02:00:00.000Z",
  "rg": "121514196254",
  "cpf": "75694825845",
  "cep": null,
  "endereco": "Rua da Esperança",
  "numero": 121,
  "complemento": "casa vermelha",
  "bairro": "Nova esperança",
  "telefone": "6233311212",
  "celular": "62998757575",
  "email": "foobar@gmail.com",
  "senha": "admin",
  "documento": "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4"
}*/