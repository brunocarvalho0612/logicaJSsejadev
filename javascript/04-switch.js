/*
const numeroDoMes = 5

if (numeroDoMes ===1) {
  console.log ("Janeiro")
} else if (numeroDoMes === 2) {
  console.log ("Fevereiro")
} else if (numeroDoMes === 3) {
  console.log ("Março")
} else if (numeroDoMes === 4) {
  console.log ("Abril")
} else if (numeroDoMes === 5) {
  console.log ("Maio")
} else if (numeroDoMes === 6) {
  console.log ("Junho")
} else if (numeroDoMes === 7) {
  console.log ("Julho")
} else if (numeroDoMes === 8) {
  console.log ("Agosto")
} else if (numeroDoMes === 9) {
  console.log ("Setembro")
} else if (numeroDoMes === 10) {
  console.log ("Outubro")
} else if (numeroDoMes === 11) {
  console.log ("Novembro")
} else if (numeroDoMes === 12) {
  console.log ("Dezembro")
} else {
  console.log ("Mês Inesistente")
}
essa ondição do else if, tb posso usar dessa forma
  if (numeroDoMes === 1) console.log ("Janeiro")
  tudo na mesma linha, quando é apenas uma condição, sem usar as chaves, 
se for mais de um item para aparecer no console, precisa das chaves

*/
// outra forma é usando o swith case

const numeroDoMes = 4

switch (numeroDoMes) {
  case 1:
    console.log ("Janeiro")
  break
  case 2:
    console.log ("Fevereiro")
  break
  case 3:
    console.log ("Março")
  break
  default:
    console.log ("Mês Inesistente") 
  break
}