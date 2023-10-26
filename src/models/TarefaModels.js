const db = require("./Database");

class TarefaModel {
    constructor(id, title, description) { 
    this.id = id; 
    this.title = title; 
    this.description = description; 
    }

    async listarTarefas() {
        //const db = require("./Database");
        let resp = await db.query("select * from `tarefa`;");
        console.log("model", resp, "funcionou");
        return resp;
        }

    }

module.exports = TarefaModel;