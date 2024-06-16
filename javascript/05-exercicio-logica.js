
const limite = 50
const valorMulta = 4
const pesoDosPeixes = 1000

let excesso
let multa

if (pesoDosPeixes > limite) {
  excesso = pesoDosPeixes - limite
} else {
  excesso = 0
}
multa = excesso * valorMulta
console.log("Excesso:  ", excesso)
console.log("Multa: R$", multa)



//multa = o excesso * valor da multa
//excesso = numero acima do 50

// na variavel const o valor nao pode ser alterado
// na variavel let o valor pode ser alterado
/*
preciso de um algoritmo que quando passar de 50 kg, ele nos diga que tem excesso e me dar o 
valor da multa. que é 
*/


