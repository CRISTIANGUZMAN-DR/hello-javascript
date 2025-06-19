/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let obj = {
  name: 'barcelona',
  champions: 5,
  estadio: 'capNou'
}

console.log(obj)
// 2. Accede y muestra su valor

console.log(obj.name)
console.log(obj.champions)
console.log(obj.estadio)

// 3. Agrega una nueva propiedad

obj.entranador = 'Flick'

// 4. Elimina una de las 3 primeras propiedades

delete obj.champions

console.log(obj)

// 5. Agrega una función e invócala

obj.canticos = function () {
  console.log('Vamos barsa vamos')
}

obj.canticos()

// 6. Itera las propiedades del objeto

for (let prop in obj) {
  console.log(prop + ': ' + obj[prop])
}

// 7. Crea un objeto anidado

obj.jugadoresEdad = {
  Lamine: 17,
  Raphina: 29,
  TerStegen: 32,
  caracteristicas: function () {
    console.log('Ellos son los mejores jugadores')
  }
}

console.log(obj)
// 8. Accede y muestra el valor de las propiedades anidadas

for (let prop in obj.jugadoresEdad) {
  console.log(prop + ': ' + obj.jugadoresEdad[prop])
}

// 9. Comprueba si los dos objetos creados son iguales

console.log(obj.jugadoresEdad === obj)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(obj.name === obj.jugadoresEdad.Lamine)
