class heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
        this.tipoAtaque = this.atacar()
    }

    atacar(){
        switch (this.tipoHeroi){
        case "mago":
            return "magia"
        case "guerreiro":
            return "espada"
        case "monge":
            return "artes marcias"
        case "ninja":
            return "shuriken"
        default:
            return "ataque desconhecido"
        }
    }

    escrever(){
        console.log(`O ${this.tipoHeroi} atacou usando ${this.tipoAtaque}`)
    }
}

let mensagem = new heroi("Gustavo", "47", "ninja")

mensagem.escrever()
