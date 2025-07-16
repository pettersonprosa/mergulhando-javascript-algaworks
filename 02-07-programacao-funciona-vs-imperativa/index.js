var person = {
  age: 17,
  name: "Mateus",
};

// Funca pura - nao gera efeitos colaterais
function getRemainingYearsToMajorty(person) {
  return 18 - person.age;
}

// Funcao impura - gera efeitos colaterais - imperativa
function increasePersonAge(person) {
  person.age = person.age + 1;
}

// chamada metodo impuro
increasePersonAge(person);

var remainingYears = getRemainingYearsToMajorty(person);

console.log(remainingYears);
