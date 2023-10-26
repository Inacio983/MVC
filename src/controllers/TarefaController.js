const TarefaModel = require('../models/TarefaModels'); 

const tarefas = [];

async function getTarefas(req, res) { 
tarefas.push(await TarefaModel.listarTarefas());
console.log(tarefas);
res.render("tarefas",{ tarefas });
} 

function addTarefa(req, res) { 
const { title } = req.body; 
const tarefa = new TarefaModel(Date.now(), title, false); 
tarefas.push(tarefa); 
res.redirect('/tarefas'); 
}

module.exports = { getTarefas, addTarefa, };