const query = require("./queries");


class Tabelas {
  init(pool) {
    this.pool = pool;
    this.criarUsuarios();
    this.criarEventos();
    this.criarTiposVendas();
  }
  // trocar as tabelas 

  criarUsuarios() {//Usuario deve ter agora, id, nome completo, data de nascimento. rg, cpf, cep, endereco, numero, complemento, bairro, telefone, celular, email, senha, documento 
    const sql =
      "CREATE TABLE IF NOT EXISTS Usuarios(id INT AUTO_INCREMENT NOT NULL, nome varchar(100) NOT NULL, urlFotoPerfil text, UNIQUE (nome), nomecompleto varchar(100), dataNascimento DATE, rg varchar(50), cpf varchar(11), cep varchar(10), endereco varchar (100), numero integer, complemento varchar (50), bairro varchar (50), telefone varchar (10), celular varchar (11), email varchar (50), senha text, documento varchar (150), PRIMARY KEY(id))";
      query(sql)
      .then(console.log("Tabela Usuarios criada com sucesso."))
    .catch((erros) => console.log(erros));
    }

  criarEventos(){

    const sql= "CREATE TABLE IF NOT EXISTS Eventos(id int NOT NULL AUTO_INCREMENT,nome varchar(100), descricao varchar(100), urlFoto text, dataInicio DATE, dataFim DATE, PRIMARY KEY(id) )";
    query(sql)
    .then(console.log("Tabela Eventos criada com sucesso."))
    .catch((erros) => console.log(erros));
  }
  criarTiposVendas(){
    const sql ="CREATE TABLE IF NOT EXISTS TiposVendas(id int NOT NULL AUTO_INCREMENT, descricao varchar(100),PRIMARY KEY(id) )";
    query(sql)
    .then(console.log("Tabela Tipos de Vendas criada com sucesso."))
    .catch((erros) => console.log(erros));
  }
}

module.exports = new Tabelas();
