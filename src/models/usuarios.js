//const conexao = require ("../infraestrutura/conexao");


/*class Usuarios{
    /*buscaPorId(id, res){
        const sql = `SELECT * FROM usuarios WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const usuario = resultados[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(usuario);
            }
        }); 
    }

    criacaoDeUsuario(usuario, res){
         const sql = "INSERT INTO Usuarios SET ?";

        conexao.query(sql, usuario, (erro, resultados) => {
             if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    listaDeUsuarios(res){
        const sql = "SELECT * FROM Usuarios";
        conexao.query(sql,  (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        }); 
    }

} */