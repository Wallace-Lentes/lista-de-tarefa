import { ModelTarefa } from "./modelTarefa.js"
import { ViewTarefas } from "./viewTarefa.js"

export class ControllerTarefas{
    constructor(){
        this.listaDeTarefas = []
    }

    criarTarefa(tituloTarefa){
        // criar a taefa
        const model = new ModelTarefa()
        const tarefa = model.construirTarefa(tituloTarefa)
        this.listaDeTarefas.push(tarefa)

        // mostrar a tarefa na tela
        const view = new ViewTarefas()
        view.mostrarTarefasNaTela(this.listaDeTarefas)
    }
}