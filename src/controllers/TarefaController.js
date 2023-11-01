const TarefaModel = require('../models/TarefaModels'); 

const tarefas = [];

async function getTarefas(req, res) { 
tarefas.push(await TarefaModel.listarTarefas());
//console.log("controller",tarefas);
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