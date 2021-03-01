// EXERCICIO 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a. 10 e 50
// // b. nada pois executaria o comando mas não imprimiria na tela

// // EXERCICIO2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a. imprime darvas e caio, pois busca os itens do array menores que 2. 
// apareceria Amanda e Caio

// EXERCICIO3

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// a. se o número for par ele multiplica por ele mesmo e adiciona no array final 
// b. função arrayNumerosPares

// // EXERCICIO4

// let nome = "Jessica"
// let idade = 29
// let cidade = "guarulhos"
// let profissao = "web full stack developer"


// function apresentacao(){

//     console.log("Olá, sou", nome,"e tenho", idade, "anos. Vivo em", cidade, "e sou", profissao,".")  
// }
// apresentacao();


// let nomeCompleto = prompt("digite seu nome");
// let idadeUsuario = prompt("digite sua idade");
// let cidadeMora = prompt("digite sua cidade");
// let estudante = true

// function apresentacaoCompleta(){
// if( estudante === !estudante){
//     console.log("Olá, sou", nomeCompleto,"e tenho", idadeUsuario, "anos. Vivo em", cidadeMora, "e não sou estudante.")  
// }
// else{  console.log("Olá, sou", nomeCompleto,"e tenho", idadeUsuario, "anos. Vivo em", cidadeMora, "e sou estudante.")  
// }

// }

// apresentacaoCompleta();

// EXERCICIO5

// let numero1 = prompt("digite um número");
// let numero2 = prompt("digite outro número");
// let novoNumero1 = parseInt(numero1)
// let novoNumero2 = parseInt(numero2)

// function somaResultado(){
// let soma = novoNumero1 + novoNumero2;
// console.log(soma);
// }
// somaResultado();

// function numeroMaior(){
// if (novoNumero1 > novoNumero2){
//     console.log(true)
// }
// else{  console.log(false)}
// }
// numeroMaior();

// let texto = prompt("digite um texto");
// function repeteDezVezes(){
//     for(let i = 0; i < 10; i++)
//   {
//     console.log(texto)
//   }
// }
//   repeteDezVezes();

//   EXERCICIO 6

  const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

  function tamanhoArray() {
     console.log(array.length);
  }

  tamanhoArray();

  let umNumero = prompt("digite um número");
  function par() {
      if(umNumero%2===0){
    console.log(true);
      }
 }

par();

function paresArray(){
    for (let i = 0; i < array.length; i++){
        if ( array[i] % 2 ===0){
console.log(array[i])
        }
    }
}
paresArray();