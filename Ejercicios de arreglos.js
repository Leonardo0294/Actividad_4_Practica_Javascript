Ejercicios de arreglos
Ejercicio 1

function obtenerSuma(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
let resultado = obtenerSuma(numeros);
console.log(resultado); 

Ejercicio 2
function obtenerPares(arreglo) {
  let numerosPares = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      numerosPares.push(arreglo[i]);
    }
  }

  return numerosPares;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6];
let pares = obtenerPares(numeros);
console.log(pares); 

Ejercicio 3
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos de notas y pesos deben tener la misma longitud.");
  }

  let sumaPonderada = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaPonderada += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }

  if (sumaPesos === 0) {
    throw new Error("Los pesos no pueden ser cero.");
  }

  return sumaPonderada / sumaPesos;
}

// Ejemplo de uso
let notas = [90, 85, 95];
let pesos = [0.3, 0.4, 0.3];
let promedioPonderado = obtenerPromedioPonderado(notas, pesos);
console.log(promedioPonderado); 

Ejercicio 4
function obtenerMaximo(arreglo) {
  if (arreglo.length === 0) {
    throw new Error("El arreglo está vacío.");
  }

  let maximo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }

  return maximo;
}


let numeros = [5, 10, 3, 8, 2];
let maximoNumero = obtenerMaximo(numeros);
console.log(maximoNumero); // Imprime 10
