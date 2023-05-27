ejercicio 1
const producto = {
  nombre: "Camisa",
  precio: 20,
  cantidad: 3
};

function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

const totalAPagar = calcularTotal(producto);
console.log(totalAPagar); // Imprime el total a pagar: 60
Ejercicio 2
const persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero"
};

function presentarPersona(persona) {
  console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.profesion}.`);
}

presentarPersona(persona);
Ejercicio 3
function esMayorEdad(persona) {
  return persona.edad >= 18;
}
const persona1 = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero"
};

const persona2 = {
  nombre: "María",
  edad: 17,
  profesion: "Estudiante"
};

console.log(esMayorEdad(persona1)); // Devuelve true
console.log(esMayorEdad(persona2)); // Devuelve false

