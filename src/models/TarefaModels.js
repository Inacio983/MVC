const db = require("./Database");

class TarefaModel {
    constructor(id, title, description) { 
    this.id = id; 
    this.title = title; 
    this.description = description; 
    }

    static async listarTarefas() {
        //const db = require("./Database");
        let resp = await db.query("select * from `tarefa`;");
        //console.log("model", resp, "funcionou");
        return resp;
        }

    static async adicionarTarefas(tarefa) {
        let item = tarefa;
        let resp = await db.query("INSERT INTO `tarefa` (`title`, `description`, `status`)VALUES ('"+item.title+"', '"+item.description+"', true);");
        return resp;
        }

    }

module.exports = TarefaModel;