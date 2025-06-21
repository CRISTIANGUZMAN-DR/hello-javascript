/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático

class Personaje {
  constructor(name, power) {
    this.name = name
    this.power = power
  }

  presentarse() {
    console.log('Hola ' + this.name + ' haz un ' + this.power)
  }

  static fusionarse() {
    console.log('Preparandome para fusionarme')
  }

  puntoDebil() {
    console.log('Mi punto debil sera...')
  }
}

let goku = new Personaje('Goku', 'Kamehameha')
console.log(goku.name)
console.log(goku.power)
goku.presentarse()
Personaje.fusionarse()

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobrescribe un método de una clase que utilice herencia

class Terricola extends Personaje {
  #superPoder
  constructor(name, power, superPower) {
    super(name, power)
    this.#superPoder = superPower
  }

  get superPower() {
    return this.#superPoder
  }

  set superPower(superPower) {
    this.#superPoder = superPower
  }

  puntoDebil() {
    console.log('Punto debil las chicas')
  }
}

let krillin = new Terricola('krillin', 'espadn', 'volar')
console.log(krillin.superPower)
krillin.superPower = 'macancosapo'
console.log(krillin.superPower)
krillin.presentarse()
krillin.puntoDebil()
// krillin.fusionarse() // no funciona
