let nome = "Lorrayne";
let xp = 1000;
let nivel = ""

if (xp <= 1000) {
    nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 4000) {
    nivel = "Prata"
} else if (xp <= 6000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 10000) {
    nivel = "Ascendente"
} else if (xp <= 12000) {
    nivel = "Diamante"
} else if (xp <= 14000) {
    nivel = "Imortal"
} else if (xp <= 16000) {
    nivel = "Radiante"
}

console.log(`O heroi de nome ${nome} esta no nivel de ${nivel}`)
