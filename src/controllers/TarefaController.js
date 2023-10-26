const TarefaModel = require('../models/TarefaModels'); 

const tarefas = [];

async function getTarefas(req, res) { 
let lista = await TarefaModel.listarTarefas();
console.log("get tarefas",lista);
return lista;
} 

function addTarefa(req, res) { 
const { title } = req.body; 
const tarefa = new TarefaModel(Date.now(), title, false); 
tarefas.push(tarefa); 
res.redirect('/tarefas'); 
}

module.exports = { getTarefas, addTarefa, };