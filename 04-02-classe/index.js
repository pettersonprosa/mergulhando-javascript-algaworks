class Human {
  hungry = true;
  name;

  constructor(name) {
    this.name = name;
  }

  eat() {
    this.hungry = false;
  }
}

const person = new Human("Joao");
console.log(person.name);

console.log(`hungry: ${person.hungry ? "morrendo da fome" : "de bucho cheio"}`);

person.eat();

console.log(`hungry: ${person.hungry ? "morrendo da fome" : "de bucho cheio"}`);
