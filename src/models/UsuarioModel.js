//const db = require("./Database");

class UsuarioModel {
    constructor(email, senha) { 
        this.id = id;
        this.nome = nome;
        this.email = email; 
        this.senha = senha; 
    }

    static async autenticar(email, senha) {
        const db = require("./Database");
        console.log(`SELECT * FROM usuario WHERE email='${email}' and senha='${senha}'`);
        let resp = await db.query(`SELECT * FROM usuario WHERE email='${email}' and senha='${senha}'`);
        // testar let resp = await db.query("SELECT * FROM usuario WHERE email=`email` and senha=`senha`");
        return resp;
        //let resp = await db.query("INSERT INTO `usuario` (`email`, `senha`)VALUES ('"+email+"', '"+senha+"');");
        }

    }

module.exports = UsuarioModel;