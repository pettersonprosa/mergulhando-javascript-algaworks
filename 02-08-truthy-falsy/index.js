function verificaCondicao(condition) {
  if (condition) {
    return console.log("a condicao eh verdadeira");
  } else {
    return console.log("a condicao eh falsa");
  }
}

var condition = false;
verificaCondicao(condition);

condition = true;
verificaCondicao(condition);

condition = 1;
verificaCondicao(condition);

console.log('========== Falsy ==========')

condition = "";
verificaCondicao(condition);

condition = 0;
verificaCondicao(condition);

condition = null;
verificaCondicao(condition);

condition = undefined;
verificaCondicao(condition);

condition = NaN;
verificaCondicao(condition);


var value = []
//Operador de negação dupla
console.log(!!value)