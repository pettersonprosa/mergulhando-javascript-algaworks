var person1 = {
  name: 'Joao',
  age: '20'
}

var person2 = {
  name: 'Debora',
  age: '35'
}

var person3 = {
  name: 'Carlos',
  age: '15'
}

var list1 = [person1, person2, person3]

var list2 = ['Joao', 'Debora', 'Carlos']

console.log(list1)
console.log(list2)

console.log(list1[1].name)
console.log(list2[1])

// iterar sobre o array
for (var person of list1) {
  console.log(person)
}