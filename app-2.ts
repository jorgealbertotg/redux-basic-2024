import { Action } from "./ngrx-fake/ngrx";
import { incrementadorAction, decrementadorAction, multiplicadorAction, divisorAction, resetAction } from "./contador/contador.actions";

function reducer(state = 10, action: Action) {
  switch(action.type) {
    case "INCREMENTAR":
      return state += 1;
    case "DECREMENTAR":
      return state -= 1;
    case "MULTIPLICAR":
      return state *= action.payload;
    case "DIVIDIR":
      return state / action.payload;
    case "RESET":
        return 0;
    default:
      return state;
  }
}

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, divisorAction));
console.log(reducer(10, resetAction))
