const btnCriarTarefa = document.querySelector('#criarTarefa')
const tituloTarefa = document.querySelector('tituloTarefa')


function criarTarefa(){
    const titulo = tituloTarefa.value

    if(titulo.length < 2){
        alert('Titulo inválido, tente novamente')
    }else{
        alert(`A tarefa "${titulo}" foi adicionada com sucesso`)
    }
}

btnCriarTarefa.addEventListener('click', criarTarefa)