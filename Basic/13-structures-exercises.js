/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'ternero', 'gallina', 'zancudo']
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.push('conejo')
console.log(animales)
animales.unshift('pajaro')
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(['la revelión de las ratas', 'blancanieves', 'el principito', 'el perfume', 'pokemon'])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add('historias de la biblia')
libros.add('blancanieves')

console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete('el principito')
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])

console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has(10)) {
    console.log(meses.get(10))
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", ["enero", "febrero", "marzo"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newEstructureArray = new Array(1, 2)
console.log(newEstructureArray)
let newEstructureSet = new Set(newEstructureArray)
console.log(newEstructureSet)
let newEstructureMap = new Map([
    ["myset", newEstructureSet],
])
console.log(newEstructureMap)