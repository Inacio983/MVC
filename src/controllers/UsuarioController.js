const UsuarioModel = require('../models/UsuarioModel'); 

let usuarios = [];


async function login(req, res) {
    res.render("login");
}

async function autenticar(req, res) {
    const md5 = require('md5');
    console.log(md5(req.body.senha));
    console.log(req.body);
    let resp = await UsuarioModel.autenticar(req.body.email, md5(req.body.senha));
    console.log("funcionou", resp);
/*const { email, senha } = req.body; 
const usuario = new UsuarioModel (email, senha);
await UsuarioModel.adicionarLogin(usuario);
//const tarefa = await new TarefaModel.adicionarTarefas(id, title, description);
usuarios.push(usuario); 
//res.redirect('/tarefas'); 
*/
}

module.exports = { login, autenticar, };