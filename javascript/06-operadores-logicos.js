/* elabore um algoritmo que dada a idade de um jogador
classifique-o em uma das categorias

infantil a = 5 a 7 anos
infantil b = 8 a 11 anos
juvenil a = 12 a 13 anos
juvenil b = 14 a 17 anos
adultos = maiores que 18 anos
 
OPERADORES LOGICOS:
OU = || : A Condição é verdadeira se um ou outro for verdadeiro
E = && : a condição é verdadeira se os 2 forem verdadeiros
*/
/*
const idade = 6

if (idade >= 5)
  if (idade <= 7){
    console.log("Infantil A")
  } else if (idade >= 8) {
  console.log("infantil B")
  }

  esta é uma forma de fazer, a seguinte será utilizando operadores logios
*/
  /*
  const idade = 12

  if (idade >= 5 && idade <= 7) {
    console.log("infantil A")
  } else if (idade >= 8 && idade <= 11) {
    console.log("infantil B")
  } else if (idade === 12 || idade === 13) {
    console.log ("juvenil A")
  } else if (idade >= 14 && idade <= 17) {
    console.log ("juvenil B")
  } else if (idade >= 18) {
    console.log ("adulto")
  }
*/
  // outra forma seria sem as chaves
/*
  const idade = 18

  if (idade >= 5 && idade <= 7) console.log("infantil A")
   else if (idade >= 8 && idade <= 11) console.log("infantil B")
   else if (idade === 12 || idade === 13) console.log ("juvenil A")
   else if (idade >= 14 && idade <= 17) console.log ("juvenil B")
   else if (idade >= 18) console.log ("adulto")
  */

   /*
   exemplo de exercicio: 
   paciente que possui entre 0 e 2 caries = suave
   paciente que possui entre 3 e 5 caries = moderado
   paciente que possui entre 6 e 8 caries = alto
   paciente que possui 9 ou mais caries = grave
*/

const carie = 7

if (carie > 0 && carie <= 2) console.log ("suave")
else if (carie >= 3 && carie <= 5) console.log ("moderado")
else if (carie >=6 && carie <= 8) console.log ("alto")
else if (carie >= 9) console.log("grave")