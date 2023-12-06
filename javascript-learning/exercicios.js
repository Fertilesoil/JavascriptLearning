console.log('Olá mundo!!')

const numeros = '1234'
console.log(Number(numeros), typeof Number(numeros))

const result = "Javascript é incrível"
console.log(`A quantidade de caracteres na frase é: ${result.length}`)
contarPalavras(result)
console.log(`Palavras: ${result.split(" ").length}`)

function contarPalavras(result) {
  // Remover espaços no início e fim da string
  let frase = result.trim();

  // Verificar se a string está vazia
  if (frase === '') {
    return 0;
  }

  // Dividir a string em palavras usando expressão regular
  let palavras = frase.split(/\s+/);

  // Retornar o número de palavras
  return console.log(`O número de palavras na frase é ${palavras.length}`)
}

const frutas = ['Canela', 'Tulipa', 'Violeta', 'Cravo', 'Gardênia']
frutas.forEach(n => console.log(n))
for (let f of frutas)
  console.log(f)

function converteHorario() {
  
}