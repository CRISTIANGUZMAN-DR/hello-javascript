/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Cristian"
if (nombre === "Cristian") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Cristian"
let contrasena = "1234"
console.log(validarDatos(usuario, contrasena))

function validarDatos(usuario, contrasena) {
    if (usuario === "Cristian" && contrasena === "1234") {
        return 'Validación correcta'
    }
    return 'Validación incorrecta'
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 3
if (num > 0) {
    console.log('Positivo')
} else if (num < 0) {
    console.log('Negativo')
} else {
    console.log('Es 0')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let persona = { nombre: 'Ana', age: 17 }
if (persona.age >= 18) {
    console.log('Puede votar')
} else {
    console.log('Aun le hacen falta ' + (18 - persona.age) + ' años')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let edad = 28
let val = edad > 18 ? 'adulto' : 'menor'
console.log(val)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 'enero'
if (mes === 'enero' || mes === 'febrero' || mes === 'marzo') {
    console.log('primavera')
} else if (mes === 'abril' || mes === 'mayo' || mes === 'junio') {
    console.log('invierno')
} else if (mes === 'julio' || mes === 'agosto' || mes === 'septiembre') {
    console.log('verano')
} else if (mes === 'octubre' || mes === 'noviembre' || mes === 'diciembre') {
    console.log('otoño')
} else {
    console.log('Mes incorrecto')
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === 'enero' || mes === 'agosto' || mes === "mayo" || mes === "octubre" || mes === "marzo" || mes === "julio") {
    console.log('31')
} else if (mes === 'abril' || mes === 'junio' || mes === "noviembre" || mes === "febrero" || mes === "septiembre") {
    console.log('30')
} else {
    console.log('Mes incorrecto')
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 'english'

switch (idioma) {
    case 'english':
        console.log('hello')
        break
    case 'español':
        console.log('hola')
        break
    case 'frances':
        console.log('bong yorno')
        break
    default:
        console.log('idioma indefinido')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 'enero':
        console.log('primavera')
        break
    case 'febrero':
        console.log('primavera')
        break
    case 'marzo':
        console.log('primavera')
        break
    case 'abril':
        console.log('invierno')
        break
    case 'mayo':
        console.log('invierno')
        break
    case 'junio':
        console.log('invierno')
        break
    case 'julio':
        console.log('verano')
        break
    case 'agosto':
        console.log('verano')
        break
    case 'septiembre':
        console.log('verano')
        break
    case 'octubre':
        console.log('otoño')
        break
    case 'noviembre':
        console.log('otoño')
        break
    case 'diciembre':
        console.log('otoño')
        break
}



// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 'enero':
        console.log('31')
        break
    case 'febrero':
        console.log('29')
        break
    case 'marzo':
        console.log('31')
        break
    case 'abril':
        console.log('30')
        break
    case 'mayo':
        console.log('31')
        break
    case 'junio':
        console.log('30')
        break
    case 'julio':
        console.log('31')
        break
    case 'agosto':
        console.log('31')
        break
    case 'septiembre':
        console.log('30')
        break
    case 'octubre':
        console.log('31')
        break
    case 'noviembre':
        console.log('30')
        break
    case 'diciembre':
        console.log('31')
        break
}