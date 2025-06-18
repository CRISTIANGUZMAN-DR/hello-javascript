/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  return a + b
}

console.log(suma(2, 4))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numeroMayor(arr) {
  let num = 0
  let mayor = 0
  arr.forEach((element) => {
    mayor = element > num ? element : num
    num = mayor
  })
  return mayor
}
console.log(numeroMayor([1, 2, 3, 4, 11, 7, 9, 2]))

function numeroMayor2(arr) {
  let mayor = arr[0]
  arr.forEach((element) => {
    if (element > mayor) {
      mayor = element
    }
  })
  return mayor
}

console.log(numeroMayor2([1, 2, 3, 4, 11, 7, 9, 2]))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numeroVocales(cadena) {
  let contador = 0
  for (let letra of cadena.toLowerCase()) {
    if ('aeiou'.includes(letra)) contador++
  }
  return contador
}

console.log(numeroVocales('Cadena de texto'))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function textoEnMayusucula(arrText) {
  let arrNew = []
  for (let cadena of arrText) {
    arrNew.push(cadena.toUpperCase())
  }
  return arrNew
}

console.log(textoEnMayusucula(['cris', 'antonio', 'beto', 'paco']))

function textoEnMayuscula2(arr) {
  let arrNew = []
  arr.forEach((element) => {
    arrNew.push(element.toUpperCase())
  })
  return arrNew
}

console.log(textoEnMayuscula2(['cris', 'antonio', 'beto', 'paco']))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(num){
    if(num)
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
