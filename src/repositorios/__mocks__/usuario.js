const usuariosMock =require ("./usuraios.json");
const valida  = require("../../models/usuarios");

class Usuarios {
    listar(){
        return Promise.resolve (usuariosMock);//precisa retornar uma promessa
    }
    buscarPorId(id) {
       return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
    }
    alterar(id){
        const encontradoAlterar = usuariosMock.find((usuario)=> usuario.id === id);
        if(encontradoAlterar){
        return Promise.resolve([encontradoAlterar]);
        }
        return Promise.reject([]);
    }
    excluir(id){
        const encontradoDoExcluir = usuariosMock.find((usuario)=> usuario.id === id);
        if(encontradoDoExcluir){
        return Promise.resolve([encontradoDoExcluir]);
        }
        return Promise.reject([]);
    }
    buscarPorNome(nome) {
        const encontrado = usuariosMock.find((usuario)=> usuario.nome === nome);
        if(encontrado){
        return Promise.resolve([encontrado]);
        }
        return Promise.resolve([]);
    }
    adicionar(usuario) {
        return Promise.resolve([{ ...usuario, id: 6 }]);
    }
    buscarDadosPessoais(id){
        
        const encontrado = usuariosMock.find((usuario) => (usuario.id === id));
        //const listaDadosPessoais = ["nomeCompleto", "dataNascimento", "rg", "cpf"];
        console.log(encontrado);
        if(encontrado){
            return Promise.resolve([encontrado.cpf, encontrado.dataNascimento, encontrado.nomecompleto, encontrado.rg]);
            }
            return Promise.resolve([]);

        //encontrado.cpf, encontrado.dataNascimento, encontrado.rg, encontrado.cpf
    }
    
    
      
    

  

  

  validarNomeUsuarioNaoUtilizado(nome) {
    return Promise.resolve(!!usuariosMock.find((usuario)=> usuario.nome === nome));//retorna boleando para converter negação dupla. 
  } 
  
}


 

/*const query = require("../infraestrutura/database/queries");

class Usuarios{
    
   
    
   
    
    
    buscarDadosPessoais(id){
        const sql = "SELECT nomeCompleto, dataNascimento, rg, cpf FROM Usuarios Where id = ?";
        return query(sql, id);
    }
    alterarDadosPessoais(id, nomeCompleto, dataNascimento, rg, cpf ){
        const sql = "UPDATE Usuarios Set nomeCompleto = ?, dataNascimento = ?, rg=?, cpf = ? WHERE id = ? ";
        return query(sql,[nomeCompleto,dataNascimento,rg, cpf, id]);
    }
    buscarDadosContatos(id){
        const sql = "SELECT telefone, celular, email FROM Usuarios Where id = ?";
        return query(sql, id);
    }
    alterarContatos(id, telefone, celular, email){
        const sql = "UPDATE Usuarios SET telefone=?, celular = ?, email = ? WHERE id =?";
        return query(sql,[ telefone, celular, email, id]);
    }    
    alterarSenha(id, senha){
        const sql = "UPDATE Usuarios SET senha=? WHERE id =?";
        return query(sql,[ senha, id]);
    }
    buscarEndereco(id){
        const sql = "SELECT endereco FROM Usuarios Where id = ?";
        return query(sql, id);
    }
    alterarEndereco(id, endereco){
        const sql = "UPDATE USuarios SET endereco =? WHERE id = ?";
        return query(sql,[endereco,id]);
    }
}

}*/


module.exports = new Usuarios;