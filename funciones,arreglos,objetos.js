ejercicio 1
const numero = parseInt(prompt("Ingresa un número:"));

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

  ejercicio 2

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

const numero = parseInt(prompt("Ingresa un número:"));

if (esPrimo(numero)) {
  console.log("El número es primo");
} else {
  console.log("El número no es primo");
}

ejercicio 3
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

const temperatura = parseFloat(prompt("Ingresa la temperatura:"));
const unidad = prompt("Ingresa la unidad de temperatura (C para Celsius, F para Fahrenheit):");

if (unidad.toLowerCase() === 'c') {
  const fahrenheit = celsiusToFahrenheit(temperatura);
  console.log(`${temperatura} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit.`);
} else if (unidad.toLowerCase() === 'f') {
  const celsius = fahrenheitToCelsius(temperatura);
  console.log(`${temperatura} grados Fahrenheit equivalen a ${celsius} grados Celsius.`);
} else {
  console.log("Unidad de temperatura no válida. Debe ser 'C' para Celsius o 'F' para Fahrenheit.");
}

ejercicio 4

let total = 0;
let precio = "";

while (true) {
  precio = prompt("Ingresa el precio del producto (o escribe 'total' para obtener el total de la compra):");

  if (precio.toLowerCase() === "total") {
    break;
  }

  const precioFloat = parseFloat(precio);

  if (isNaN(precioFloat)) {
    console.log("Precio no válido. Por favor, ingresa un número válido o escribe 'total' para obtener el total de la compra.");
  } else {
    total += precioFloat;
  }
}

console.log(`El total de la compra es: $${total.toFixed(2)}`);