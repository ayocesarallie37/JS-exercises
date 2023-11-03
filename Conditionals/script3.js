// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más,
// muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro
// mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.


let edad = parseInt(prompt("Edad:"));

if (edad >= 18) {
  console.log('Tiene la edad suficiente para conducir.');
} else {
  let añosEspera = 18 - edad;
  console.log('Te faltan '+añosEspera+' años para conducir.');
}




// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el
// resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para
// obtener la edad como entrada


let myAge = parseInt(prompt("Ingresa tu edad."));
let yourAge = parseInt(prompt("Ingrese la edad de la otra persona."));

if (myAge > yourAge) {
  console.log(`Eres ${myAge - yourAge} años mayor que yo.`);
} else if (yourAge > myAge) {
  console.log(`Soy ${yourAge - myAge} años mayor que tú.`);
} else {
  console.log("Tenemos la misma edad.");
}




// Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de
// implementarlo de maneras diferentes.


let valor1 = parseInt(prompt('Ingrese un número.'))
let valor2 = parseInt(prompt('Ingrese el otro número.'))


if (valor1 > valor2) {
  console.log("a es mayor que b");
} else {
  console.log("a es menor que b");
}

let resultado = valor1 > valor2 ? "a es mayor que b" : "a es menor que b";
console.log(resultado);




// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
// ● Septiembre, Octubre o Noviembre, la temporada es Otoño.
// ● Diciembre, Enero o Febrero, la temporada es Invierno.
// ● Marzo, Abril o Mayo, la temporada es Primavera.
// ● Junio, Julio o Agosto, la temporada es Verano.

let mes = String(prompt("Ingrese un mes:"))
let temporada;

switch (mes) {
  case "Septiembre":
  case "Octubre":
  case "Noviembre":
    temporada = "Otoño";
    break;
  case "Diciembre":
  case "Enero":
  case "Febrero":
    temporada = "Invierno";
    break;
  case "Marzo":
  case "Abril":
  case "Mayo":
    temporada = "Primavera";
    break;
  case "Junio":
  case "Julio":
  case "Agosto":
    temporada = "Verano";
    break;
  default:
    temporada = "Mes no válido";
}

console.log(`La temporada es ${temporada}.`);





// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// ● 80-100, A
// ● 70-89, B
// ● 60-69, C
// ● 50-59, D
// ● 0-49, F

let calificacion = parseFloat(prompt("Ingrese el puntaje del estudiante:"));

if (calificacion >= 80 && calificacion <= 100) {
  console.log("Calificación: A");
} else if (calificacion >= 70 && calificacion < 80) {
  console.log("Calificación: B");
} else if (calificacion >= 60 && calificacion < 70) {
  console.log("Calificación: C");
} else if (calificacion >= 50 && calificacion < 60) {
  console.log("Calificación: D");
} else if (calificacion >= 0 && calificacion < 50) {
  console.log("Calificación: F");
} else {
  console.log("Puntaje invalido.");
}























