//Desafio 2 - Calculadora de Partidas Rankeadas
let nivel = ""
saldo = calculateRanking(100, 49)

function calculateRanking(wins, looses){
    let rank = wins - looses
    return rank
}

if(saldo < 10) {
    nivel = "Ferro"
} else if(saldo > 10 && saldo <= 20){
    nivel = "Bronze"
} else if(saldo > 20 && saldo <= 50){
    nivel = "Prata"
} else if(saldo > 50 && saldo <= 80){
    nivel = "Ouro"
} else if(saldo > 80 && saldo <= 90){
    nivel = "Diamante"
} else if(saldo > 90 && saldo <= 100){
    nivel = "Lendário"
} else if(saldo > 100){
    nivel = "Imortal"
} else {
    nivel = "10 não é um nível válido"
}

console.log(`O Herói tem saldo de ${saldo} está no nível de ${nivel}.`)
