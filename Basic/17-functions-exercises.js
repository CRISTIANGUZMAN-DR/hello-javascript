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

function numeroPrimo(num) {
  if (num < 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(numeroPrimo(7))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arr1, arr2) {
  let arrNew = []
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      arrNew.push(element)
    }
  })
  return arrNew
}
let arr1 = ['CRIS', 'ANTONIO', 'BETO', 'PACO']
let arr2 = ['JAVIER', 'TIGO', 'CRIS', 'BETO']
console.log(elementosComunes(arr1, arr2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let sumarPares = (arr) => {
  let res = 0
  for (let v of arr) {
    if (v % 2 == 0) {
      res += v
    }
  }
  return res
}

console.log(sumarPares([1, 2, 3, 4, 9, 8]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function raizCuadrada(arr) {
  let newArr = []
  let raiz
  arr.forEach((element) => {
    raiz = Math.sqrt(element)
    newArr.push(raiz)
  })
  return newArr
}

console.log(raizCuadrada([1, 2, 3, 4, 9, 8]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaContrario(cadena) {
  let palabra = cadena.split(' ') // devuelve un array de palabras
  palabra.reverse() // devuelve el array de palabras al reves
  let reversa = palabra.join(' ') // devuelve la cadena de texto unida por el simbolo que le indiquemos
  return reversa
}

let cadena = 'Hola devuelve las palabras al reves'
console.log(cadenaContrario(cadena))
// 10. Crea una función que calcule el factorial de un número dado

let factorial = (n) => {
  let fac = 1
  for (let i = 1; i <= n; i++) {
    fac *= i
  }
  return fac
}
console.log(factorial(4))
