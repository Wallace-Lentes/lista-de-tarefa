export class ModelTarefa{
    constructor(){
        this.titulo = ''
        this.status = false
        this.id = ''
        console.log('Model foi criada')
    }

    construirTarefa(tituloTarefa){
        console.log('Model criou a atarefa')
        this.setTitulo(tituloTarefa)
        this.setId()

        return this
    }

    setTitulo(titulo){
        this.titulo = titulo
    }

    setStatus(){
        this.status = !this.status
    }
    setId(){
        this.id = this._geraId()
    }

    _geraId(){
        const numeroAleatorio = Math.floor(Math.random() * 1000)
        return numeroAleatorio
    }
}