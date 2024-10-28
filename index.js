const nome = "Arthur"
let xp = 2001
// variável auxiliar para a mensagem
let nivel = ""

// como não foi explicitado as condições abaixo consideram o com conjunto fechado ex.: [9001,1000]
if (xp >= 10001) {
    nivel = "Radiante"
} else if (xp >= 9001){
    nivel = "Imortal"
} else if (xp >= 8001){
    nivel = "Ascendente"
} else if (xp >= 7001){
    nivel = "Platina"
} else if (xp >= 6001){
    nivel = "Ouro"
} else if (xp >= 2001){
    nivel = "Prata"
} else if (xp >= 1001){
    nivel = "Bronze"
} else {
    nivel = "Ferro"
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)