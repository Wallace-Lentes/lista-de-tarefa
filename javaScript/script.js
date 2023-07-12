
import { ControllerTarefas } from './mvcTarefas/controllerTarefa.js';


const btnCriarTarefa = document.querySelector('#criarTarefa')
const tituloTarefa = document.querySelector('tituloTarefa')
const controller = new ControllerTarefas()


function criarTarefa(){
    const titulo = tituloTarefa.value

    if(titulo.length < 2){
        alert('Titulo inválido, tente novamente')
    }else{
        controller.criarTarefa(titulo)
        alert(`A tarefa "${titulo}" foi adicionada com sucesso`)
    }
}

btnCriarTarefa.addEventListener('click', criarTarefa)