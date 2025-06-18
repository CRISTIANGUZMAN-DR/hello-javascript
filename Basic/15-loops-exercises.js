/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

let num = 0
while (num <= 20) {
  console.log(num)
  num++
}

// for (let i = 1; i < 21; i++) {
//     console.log(i)
// }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

num = 0
let total = 0
do {
  total += num
  num++
} while (num <= 100)
console.log(total)

total = 0
for (let i = 0; i <= 100; i++) {
  total += i
}
console.log(total)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ['cris', 'antonio', 'beto', 'paco']
for (let valor of nombres) {
  console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = 'murcielago'
let contador = 0
for (let letra of cadena) {
  if ('aeiou'.includes(letra.toLowerCase())) {
    contador++
  }
}

console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 2, 3]
let res = numeros.reduce((acc, el) => {
  return acc * el
})

console.log(res)

let mult = 1
for (let num of numeros) {
  mult *= num
}

console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let digito = 5
for (let i = 0; i <= 10; i++) {
  console.log(digito * i)
}

// 8. Usa un bucle para invertir una cadena de texto\

cadena = 'Cadena'
let cadenaFormateada = ''
for (let letra of cadena) {
  cadenaFormateada = letra + cadenaFormateada
}
console.log(cadenaFormateada)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let ini1 = 0
let ini2 = 1
for (let i = 0; i <= 10; i++) {
  console.log(ini1)
  let temp = ini1 + ini2
  ini1 = ini2
  ini2 = temp
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numeros = [10, 20, 15, 5, 12]
let arr = []
for (let num of numeros) {
  if (num > 10) {
    arr.push(num)
  }
}

console.log(arr)
