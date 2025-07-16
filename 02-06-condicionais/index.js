var me = {
  name: "Joao",
  age: 0
};

function checkAge(person) {
  console.log("A idade da pessoa é: " + person.age);
  if (person.age > 17) {
    console.log('A pessoa é maior de idade')
  } else {
    console.log('A pessoa é NÃO maior de idade')
  }
}

checkAge(me);

// Verifica valor ignorando o tipo
console.log(15 == '15');

// verifica valor e tipo
console.log("15" === '15');