const fetch = require("node-fetch");
const repositorio = require("../repositorios/usuario");

class Usuarios {
  listar() {
    return repositorio.listar();
  }

  buscarPorId(id) {
    return repositorio.buscarPorId(id);
  }

  async adicionar(usuario) {
   
    const validacoes = [
      {
        nome: `${usuario.nome}`,
        valido: this.isNomeValido(usuario?.nome) &&
          (await this.validarNomeUsuarioNaoUtilizado(usuario?.nome)),
        mensagem: "Nome informado deve ser único e não vazio",
      },
      {
        url: `${usuario.urlFotoPerfil}`,
        valido:
          this.isFormatoUrlFotoValido(usuario?.urlFotoPerfil) &&
          (await this.isStatusFotoValido(usuario?.urlFotoPerfil)),
        mensagem: "URL informada deve  ser uma URL válida",
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);

    return erros.length > 0
      ? Promise.reject({erroApp: erros})
      : repositorio.adicionar(usuario);
  }

  alterar(id, valores) {
    return repositorio.alterar(id, valores);
  }

  excluir(id) {
    return repositorio.excluir(id);
  }

  buscarPorNome(nome) {
    return repositorio.buscarPorNome(nome);
  }

  buscarDadosPessoais(id){
    return repositorio.buscarDadosPessoais(id);
  }

  alterarDadosPessoais(id,nomeCompleto, dataNascimento, rg, cpf ){
    //const {nomeCompleto, dataNascimento,rg,cpf} = dadosPessoais;
      return repositorio.alterarDadosPessoais(id,nomeCompleto, dataNascimento, rg, cpf);
  }

  buscarDadosContatos(id){
    return repositorio.buscarDadosContatos(id);
  }

  alterarContatos(id, telefone, celular, email){
    return repositorio.alterarContatos(id, telefone, celular,email);
  }

  alterarSenha(id, senha){
    return repositorio.alterarSenha(id,senha);
  }
  buscarEndereco(id){
    return repositorio.buscarEndereco(id);
  }

  alterarEndereco(id, endereco){
    return repositorio.alterarEndereco(id, endereco);
  }
  
  //VALIDAÇÕES//

    isNomeValido(nome) {
      return nome?.length > 3;
    }  
    isFormatoUrlFotoValido(urlFoto) {
      const regex =
        /https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/gm;
  
      return urlFoto.match(regex);
    }  
    async isStatusFotoValido(urlFoto) {
      const response = await fetch(urlFoto, { method: "HEAD" });
      return response.status !== 200 ? false : true;
    }
    async validarNomeUsuarioNaoUtilizado(nome) {
      const resultados = await repositorio.buscarPorNome(nome);
      return resultados.length > 0 ? false : true;
      
    }
    objCamposAceitos(obj, listaChaves) {
      const chaves = Object.keys(obj);
      const camposMantidos = chaves.filter((chave) =>
        listaChaves.includes(chave)
      );
      return camposMantidos.reduce((novo, chave) => {
        novo[chave] = obj[chave];
        return novo;
      }, {});
    }
     
}

module.exports = new Usuarios();