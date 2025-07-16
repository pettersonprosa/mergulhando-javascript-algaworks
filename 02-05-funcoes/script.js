function greet(name = 'mergulhadores') {
  console.log("Bom dia " + name)

  return
}

function greetComRetorno(name = 'mergulhadores com retorno') {
  return "Bom dia " + name
}

greet()
greet('Joao')
console.log(greet())

console.log(greetComRetorno())
console.log(greetComRetorno('Jose'))