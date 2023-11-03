let firstName = 'César'
let lastName = 'Pérez'
let country = 'México'
let city = 'Solidaridad'
let age = 20
let isMarried = false
let year = 2023

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// '10' es igual a 10
console.log(typeof '10' == typeof 10)

// parseInt ('9.8') es igual a 10
console.log(parseInt('9.8')==10)

// Verificar valores Booleanos.
//
// Verdaderos
console.log(20 <= 30)
console.log('Inmortal'.length == 'Disparar'.length)
console.log(undefined == null)

// Falsos
console.log(150 >= 1500)
console.log('Sapo'.length != 'Casa'.length)
console.log(undefined === null)

// Resultado de expresiones.

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Objetos Date
//
// ¿Qué año es hoy?
const now = new Date()
console.log(now.getFullYear())

// ¿Qué mes es hoy con un número?
console.log(now.getMonth() + 1)

// ¿Qué fecha es hoy?
console.log('La fecha de hoy es: '+now)

// ¿Qué día es hoy con un número?
console.log(now.getDate())

// ¿Cuál es la hora actual?
console.log(now.getHours())

// ¿Cuántos minutos hay actualmente?
console.log(now.getMinutes())

// Número de milisegundos transcurridos de el 1 de enero de 1970 hasta ahora.
console.log(now.getTime('January 1, 1970'))


// Área de un triángulo

let base = parseInt(prompt('Ingrese la base.'))
let altura = parseInt(prompt('Ingrese la altura.'))
let area = 0.5 * base * altura

console.log('El área de un triángulo es: '+area)

// Calcular el perimetro de un triangulo

let l1 = parseInt(prompt('Ingrese el lado 1.'))
let l2 = parseInt(prompt('Ingrese el lado 2.'))
let l3 = parseInt(prompt('Ingrese el lado 3.'))
let perimetro = l1 + l2 + l3

console.log('El perimetro de tu triángulo es: '+perimetro)




