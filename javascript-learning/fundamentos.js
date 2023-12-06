const fruta = 'Banana'

switch (fruta) {
  case 'Banana':
    console.log('Banana é a fruta')
    break

  case 'Maçã':
    console.log('Maçã é a fruta')
    break

  default:
    console.log('Nada para ver aqui')
}

hoisting()

for (let i = 0; i < 5; i++) {
  console.log(`O valor de i é: ${i}`)
}

let k = 0;

while (k < 5) {
  console.log(`O valor de k é: ${k}`)
  k++
}

function nome(arg1, arg2) {
  console.log(`Cumprimente o ${arg1}, senhore ${arg2}.`)
}

nome('Paulinha', 'Laurélio')

function hoisting() {
  console.log('Deu certo !!')
}

const testeArrow = () => console.log('Que porra é essa ??')
testeArrow()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numeros[7], typeof numeros[3])

numeros.forEach((n) => console.log(n))

numeros.pop()
numeros.forEach((n) => console.log(n))


const agora = Date()
console.log(agora)

const natal = new Date(2023, 11, 25)
console.log(natal)