const express = require('express'); 
const session = require('express-session');
//const path = require('path');

const tarefaController = require('./src/controllers/TarefaController'); 
const usuarioController = require('./src/controllers/UsuarioController'); 

const app = express(); 
const port = 3000; 

//app.use(express.static(path.join(__dirname, "./src/public/css/style.css")));

app.set('view engine', 'ejs'); 
app.set("views","./src/views");

app.get("/", (req,res)=>res.send("<h1>MVC</h1>"));
app.use(express.urlencoded({ extended: true })); 

app.get('/tarefas', tarefaController.getTarefas);
app.post('/tarefas', tarefaController.addTarefa);

app.get('/login', usuarioController.login);
app.post('/login', usuarioController.autenticar);

app.listen(port, () => { 
console.log(`Servidor rodando em http://localhost:${port}`);
});