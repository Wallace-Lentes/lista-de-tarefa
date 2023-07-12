const ul = document.querySelector('.content-list')

export class ViewTarefas{
    mostrarTarefasNaTela(listaDeTarefas){
        console.log('to na view')

        listaDeTarefas.array.forEach((tarefa) => {
            this._criarHtmlTarefa(tarefa)
        });

    }

    _criarHtmlTarefa(tarefa){
        const li =document.createElement('li')
        const p =document.createElement('p')

        li.classList.add('task')
        li.id = tarefa.id

        p.textContent = tarefa.titulo

        li.appendChild(p)

        ul.appendChild(li)
    }
}