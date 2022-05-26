const Usuarios = require("../models/usuarios");

module.exports = (app) => {
  app.get("/usuarios", (req, res, next) => {
    Usuarios.listar()
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));
  });

  app.get("/usuarios/:id", (req, res, next) => { 
    const id = parseInt(req.params.id);
    Usuarios.buscarPorId(id)
    .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
    .catch(erros => next(erros));
  });

  app.post("/usuarios", (req, res, next) => {
    const usuarios = req.body;
    Usuarios.adicionar(usuarios)
      .then((resultados) => res.status(201).json(resultados[0]))
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id", (req, res, next) => { 
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterar(id, valores)
    .then(resultados => res.status(204).json(resultados[0]))
    .catch(erros => next(erros));

  });

  app.delete("/usuarios/:id", (req, res, next) => { 
    const id = parseInt(req.params.id);
    Usuarios.excluir(id)
    .then(resultados => res.status(204).json(resultados))
    .catch(erros => next(erros));
  });

  app.get("/usuarios/nome/:nome", (req, res, next) => {
    const nome = req.params.nome;
    Usuarios.buscarPorNome(nome)
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));
  });

  app.get("/usuarios/:id/dados-pessoais", (req, res, next) => { 
    const id = parseInt(req.params.id);
    Usuarios.buscarDadosPessoais(id)    
    .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
    .catch(erros => next(erros));
  });

  app.put("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const usuario = {};
    usuario.id = parseInt(req.params.id);
    usuario.nomeCompleto = req.body.nomeCompleto;
    usuario.dataNascimento = req.body.dataNascimento;
    usuario.rg = req.body.rg;
    usuario.cpf= req.body.cpf;
    Usuarios.alterarDadosPessoais(usuario.id, usuario.nomeCompleto, usuario.dataNascimento, usuario.rg, usuario.cpf)
    .then((usuario) => (usuario ? res.status(204).json(usuario) : res.status(404).send()))
    .catch(erros => next(erros));
   

  });

  app.get("/usuarios/:id/contatos", (req, res, next) => { 
    const id = parseInt(req.params.id);
    Usuarios.buscarDadosContatos(id)
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));
  });

  app.put("/usuarios/:id/contatos", (req, res, next) => {
    const usuario = {};
    usuario.id = parseInt(req.params.id);
    usuario.telefone = req.body.telefone;
    usuario.celular = req.body.celular;
    usuario.email = req.body.email;
    Usuarios.alterarContatos(usuario.id, usuario.telefone, usuario.celular, usuario.email)
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));

  });

  app.put("/usuarios/:id/senha", (req, res, next) => {
    const usuario = {};
    usuario.id = parseInt(req.params.id);
    usuario.senha = req.body.senha;
    Usuarios.alterarSenha(usuario.id, usuario.senha)
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));

  });

  app.get("/usuarios/:id/endereco", (req, res, next) =>{
    const id = parseInt(req.params.id);
    Usuarios.buscarEndereco(id)
    .then(resultados => res.json(resultados))
    .catch(erros => next(erros));

  });

  app.put("/usuarios/:id/endereco", (req,res, next) =>{
    const usuarios={};
    usuarios.id= parseInt(req.params.id);
    usuarios.endereco = req.body.endereco;
    Usuarios.alterarEndereco(usuarios.id, usuarios.endereco)
    .then(resultados =>res.json(resultados))
    .catch(erros => next(erros));

  });

};
