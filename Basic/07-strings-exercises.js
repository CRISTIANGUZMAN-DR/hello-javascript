/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("Hola," + " estoy concatenando texto")
// 2. Muestra la longitud de una cadena de texto
let texto = "Hola, javaScript"
console.log(texto.length)
// 3. Muestra el primer y último carácter de un string
console.log(texto[0])
console.log(texto[texto.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let cadena = `Este es un texto
                en varias
            lineas`
console.log(cadena)
// 6. Interpola el valor de una variable en un string
let interpol = `Este es un texto para saludar ${texto}`
console.log(interpol)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(interpol.replaceAll(" ", '-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes('javaScript'))
// 9. Comprueba si dos strings son iguales
console.log(texto === cadena)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(texto.length === cadena.length)