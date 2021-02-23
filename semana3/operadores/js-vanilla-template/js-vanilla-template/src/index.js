
/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)


RESPOSTA: 

a. false
b. false
c. false
e. bollean


let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

RESPOSTA

a. undefined
b. null
c. 11
d. 0
e. 19
f. i + 6

 */

 let idadeUsuario = 40
 let idadeAmigo = 30
let resultado = idadeUsuario > idadeAmigo
let diferenca = idadeUsuario - idadeAmigo

 console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
 console.log("Diferença de idade", diferenca)

let numero = 30
let par = numero%2


console.log(par)

/* caso seja par o resto é 0 e caso impar é 1 */

let listaDeTarefas = []
listaDeTarefas = ['comer', 'dormir', 'escrever', 'limpar']
listaDeTarefas.indexOf(2)
listaDeTarefas.pop(2)
console.log(listaDeTarefas)

let emailDoUsuario = 'qrnojess@gmail.com'
let nomeDoUsuario = 'Jessica'
console.log('O e-mail', emailDoUsuario, 'foi cadastrado com sucesso. Seja bem-vinda(o)', nomeDoUsuario)
