//Escribir un programa para imprimir N(cantidad de numeros primos ingresado por el usuario) numeros primos generados de forma aleatorio y  cargado en un 
// array que sean menores al 110.
// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para generar una cantidad N de números primos aleatorios menores a 110
function generarNumerosPrimos(N) {
    let numerosPrimos = []; //Array para almacenar los numeros primos generados 
    while (numerosPrimos.length < N) {
        let numeroAleatorio = Math.floor(Math.random() * 110);
        if (esPrimo(numeroAleatorio)) {
            numerosPrimos.push(numeroAleatorio); // Si es primo, se añade al array de numeros primos 
        }
    }
    return numerosPrimos;
}

// Función para solicitar al usuario la cantidad de números primos a generar y mostrar los resultados
function imprimirNumerosPrimos() {
    let cantidadNumerosPrimos = parseInt(prompt("Ingrese la cantidad de números primos a generar:"));
    let numerosPrimosGenerados = generarNumerosPrimos(cantidadNumerosPrimos);

    console.log(`Los ${cantidadNumerosPrimos} números primos generados de forma aleatoria y menores a 110 son:`);
    console.log(numerosPrimosGenerados);
}

// Llamada a la función para solicitar la cantidad de números primos a generar e imprimir los resultados
imprimirNumerosPrimos();