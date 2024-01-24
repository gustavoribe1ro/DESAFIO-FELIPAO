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
/*
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
*/