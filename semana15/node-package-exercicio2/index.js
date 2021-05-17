// exercício 2

const op = process.argv[2]
const valueOne = process.argv[3];
const valueTwo = process.argv[4];

switch(op){
  case "add":
    console.log(Number(valueOne) + Number(valueTwo))
    break;
    case "subt":
      console.log(Number(valueOne) - Number(valueTwo))
      break;
      case "div":
        console.log(Number(valueOne) / Number(valueTwo))
        break;
        case "mult":
          console.log(Number(valueOne) * Number(valueTwo))
          break;
}


