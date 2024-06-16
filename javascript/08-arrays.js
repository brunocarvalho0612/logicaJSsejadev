
/*var variavel = 10
let array = [true, false, 0, 1, 2, "string", variavel] //o array pode carregar varias informações, de diferentes tipos

// console.log(array)   // se eu colocar entre colchetes dentro do array, ele mostra apenas a posição que eu coloquei
// se eu colocar entre os colchetes algum numero que nao foi colocado, ele vem como indefinido (diferente do null)

//array.push()  -- adiciona mais elementos ao array- outra forma é colocar array[numero]
array.pop()  //remove o ultimo item do array

// console.log(array)

let newArray = [10, 20, 30]

for (let pos = 0; pos < newArray.length; pos++) {
 // console.log(newArray[pos])
}

// outra forma de escrever o for , são os for...in e for...of
//for..in dá a posição de cada item do arrey -- o for..of dá o valor do arrey

for (let pos in newArray) {
  //console.log(pos)
  //console.log(newArray[pos])
}

for (let poos of newArray){
  console.log(newArray)
}

/*
dado um array com X numeros, encontrar a media desses numeros 
*/

const numbers = [10, 20, 30, 100, 300]
let sum = 0

for (let num of numbers) {
  sum = num + sum 
}
const media = sum / numbers.length
console.log(media)


