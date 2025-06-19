/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let numeros = [3, 47, 26, 55, 66]
let [primero, segundo] = numeros
console.log(segundo)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [pri, seg, ter, cua, qui, sex = 15] = numeros
console.log(pri, seg, ter, cua, qui, sex)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let estudiante = {
  nombre: 'Pedro',
  edad: 25,
  ciudad: 'Bogota',
  sexo: 'm'
}

let { nombre, sexo } = estudiante

console.log('Nombre:' + nombre + ' sexo:' + sexo)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { nombre: nameEstudent, edad: ageEstudent } = estudiante
console.log(ageEstudent, nameEstudent)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let equipo = {
  name: 'barcelona',
  coach: 'Flick',
  jugadores: {
    portero: 'TerStegen',
    delantero: 'Lamine',
    defensa: 'Cubarsi'
  }
}

let {
  name,
  coach,
  jugadores: { portero, delantero, defensa }
} = equipo

console.log(name, coach)
console.log(portero, delantero, defensa)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let nombres = ['Juan', 'Camilo', 'Stiven']
let edad = [15, 37, 31]

let combinacion = [...nombres, ...edad]
console.log(combinacion)

// 7. Usa propagación para crear una copia de un array

let apellidos = ['Guzman', 'Silva', 'Geros']
let copiaApellidos = [...apellidos]
let referenciaApellidos = apellidos

console.log(apellidos === copiaApellidos)
console.log(apellidos === referenciaApellidos)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let empresa = {
  name: 'coca cola',
  anio: 1979
}

let empresa2 = {
  ciudad: 'estados unidos',
  final: 2025
}

let empresas = { ...empresa, ...empresa2 }
console.log(empresas)

// 9. Usa propagación para crear una copia de un objeto

let empresaCopia = { ...empresas }
let empresaReferencia = empresas
console.log(empresaReferencia === empresas)

// 10. Combina desestructuración y propagación

let rankingJugadores = ['Falcao', 'James', 'Quintero', 'Cardona', 'Mina']
let copRanking = [...rankingJugadores]
let [num1, num2] = copRanking

console.log(num1, num2)
  