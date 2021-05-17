// exercício 1 - 

// a. atráves do process.argv que traz os valores.

//b. 
const user = process.argv[2];
const age = process.argv[3];

if(!user && !age){
    console.log("Você precisa preencher as informações")
}else{
    console.log(`Olá, ${user}! Você tem ${age} anos.`);
}

// c. 

const ageSevenYears = Number(age) + 7
console.log(`Olá, ${user}! Você tem ${age} anos. Em sete anos você terá ${ageSevenYears}`)

