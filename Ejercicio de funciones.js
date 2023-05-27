Ejercicios de funciones
Ejercicio 1
function esMayorEdad(edad) {
  return edad >= 18;
}


const edades = [15, 20, 17, 25, 12, 19];
const mayoresDeEdad = edades.filter(edad => esMayorEdad(edad));
console.log(mayoresDeEdad); // [20, 25, 19]


Ejercicio 2

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// Ejemplo de uso
const baseRectangulo = 5;
const alturaRectangulo = 8;
const areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
console.log(areaRectangulo); 

Ejercicio 3

function esPalindromo(cadena) {
  
  cadena = cadena.toLowerCase().replace(/\s/g, "");

  // Comparar la cadena original con su reverso
  const reverso = cadena.split("").reverse().join("");
  return cadena === reverso;
}


console.log(esPalindromo("radar")); // true
console.log(esPalindromo("hola")); // false
console.log(esPalindromo("bien")); // true

Ejercicio 4
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}


const numeroAleatorio = generarNumeroAleatorio();
console.log(numeroAleatorio);

