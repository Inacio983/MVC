const TarefaModel = require('../models/TarefaModels'); 

let tarefas = [];

async function getTarefas(req, res) { 
tarefas= await TarefaModel.listarTarefas();
//console.log(tarefas[1]);
res.render("tarefas",{ tarefas });
} 

async function addTarefa(req, res) { 
const { id, title, description } = req.body; 
const tarefa = new TarefaModel (id, title, description);
await TarefaModel.adicionarTarefas(tarefa);
//const tarefa = await new TarefaModel.adicionarTarefas(id, title, description);
tarefas.push(tarefa); 
res.redirect('/tarefas'); 
}

module.exports = { getTarefas, addTarefa, };