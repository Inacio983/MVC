const TarefaModel = require('../models/TarefaModels'); 

const tarefas = [];

function getTarefas(req, res) { 
res.render('tarefas', { tarefas }); 
} 
function addTarefa(req, res) { 
const { title } = req.body; 
const tarefa = new TarefaModel(Date.now(), title, false); 
tarefas.push(tarefa); 
res.redirect('/tarefas'); 
} 

module.exports = { getTarefas, addTarefa, };