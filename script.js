// Map - percorrer todo um array
let lista = ['Mateus', "Jose", "Maria"]

lista.map((item, index) => {
    console.log(`Passando: ${item} - esta na posição ${index}`)
})

// Reduce - reduz um array
let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total até o momento`)
  console.log(`${numero} - valor atual`)
  console.log(`${indice} - indice atual`)
  console.log(`${original} - array original`)
  console.log(`=====================================`)

  return acumulador += numero;
})

console.log('total do reduce: ' + total)

// find - vai devolver o primeiro registro que encontrar na condição
let listagem = [5, 3, "Jose", 2, "Matheus"]

let busca = listagem.find((item) => {
  if(item === "Jose") {
      return console.log('Item encontrado')
  }
})

console.log(busca)

// Filter - retorna todos os registros que encontrar na condição
let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"]

let resultado = palavras.filter((item) => {
  return item.length <= 4;
})
console.log(resultado)

// include, startWith, endsWith
let nomes = ["Matheus", "Lucas", "Jose"]

console.log(nomes.includes("Lucas"))  // busca um valor dentro de um array e retorna true ou false

if (nomes.includes("Matheus")) {
  console.log("Esta na lista")
} else {
  console.log("Não esta na lista")
}

let nome = "Ezio"
console.log(nome.startsWith("Ez"))
console.log(nome.endsWith("io"))
