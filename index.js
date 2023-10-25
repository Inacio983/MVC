const express = require('express'); 
const tarefaController = require('./src/controllers/TarefaController'); 
const app = express(); 
const port = 3000; 

app.set('view engine', 'ejs'); 
app.set("views","./src/views");

app.get("/", (req,res)=>res.send("<h1>MVC</h1>"))
app.use(express.urlencoded({ extended: true })); 
app.get('/tarefas', tarefaController.getTarefas); 
app.post('/tarefas', tarefaController.addTarefa); 
app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});