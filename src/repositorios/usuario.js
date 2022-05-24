const query = require("../infraestrutura/database/queries");

class Usuarios{
     listar(){
        const sql = "SELECT * FROM Usuarios";
        return query(sql);
    }
    buscarPorId(id) {
        const sql = "SELECT * FROM Usuarios WHERE id = ?";
        return query(sql, id).then((data) => data[0]);

    }
    alterar(id, valores) {
        const sql = "UPDATE Usuarios SET ? WHERE id = ?";
        return query(sql, [valores,id]);
    }
    excluir(id) {
        const sql = "DELETE FROM Usuarios WHERE id = ?";
        return query(sql, id);
    }
    buscarPorNome(nome) {
        const sql = "SELECT * FROM Usuarios WHERE nome like ?";
        return query(sql, "%" + nome + "%" );
    }
    adicionar(usuario){
        const sql = "INSERT INTO Usuarios SET ?";
        return query(sql, usuario);
    }
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


module.exports = new Usuarios;