/*
Escribe un programa que pida una frase y escriba:
-Cuantas veces aparece la letra "o". Ejemplo: Hola - 1
-Las vocales que aparecen. Ejemplo Hola - 2
-Cuantas veces aparecen cada una de las vocales. Ejemplo Hola - o:1, a:1
(resolver el problema en funciones)en JavaScript.
*/
// Función principal para procesar una frase ingresada por el usuario e imprimir los resultados 
function imprimir() {
    let frase = prompt("Ingrese una frase:"); // Solicitar al usuario que ingrese una frase
    let cantidadLetraO = contarLetraO(frase); // Contar la cantidad de veces que aparece la letra "o" en la frase
    let vocales = obtenerVocales(frase); // Obtener las vocales únicas presentes en la frase
    let cantidadVocales = contarVocales(frase); // Contar la cantidad de cada vocal que aparece en la frase

    console.log("La letra 'o' aparece "+cantidadLetraO+" veces en la frase."); // Mostrar la cantidad de 'o' en la frase
    console.log(`Las vocales que aparecen en la frase son: ${vocales.join(', ')}`); // Mostrar las vocales presentes, 
    console.log("Cantidad de cada vocal:"); // Encabezado para mostrar la cantidad de cada vocal
    for (let vocal in cantidadVocales) {
        console.log(`${vocal}: ${cantidadVocales[vocal]}`); // Mostrar la cantidad de cada vocal presente en la frase
    }
}
// Función para contar la cantidad de veces que aparece la letra 'o' en una frase
function contarLetraO(frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'o') {
            contador++;
        }
    }
    return contador;
}

// Función para obtener las vocales únicas que aparecen en una frase
function obtenerVocales(frase) {
    let vocales = []; // Array para almacenar las vocales únicas
    for (let i = 0; i < frase.length; i++) {
        if ('aeiou'.includes(frase[i].toLowerCase())) { // Verificar si el carácter actual es una vocal
            if (!vocales.includes(frase[i].toLowerCase())) { // Verificar si la vocal no está en el array de vocales
                vocales.push(frase[i].toLowerCase()); // Agregar la vocal al array de vocales únicas
            }
        }
    }
    return vocales; // Devolver el array con las vocales únicas presentes en la frase
}

// Función para contar la cantidad de cada vocal que aparece en una frase
function contarVocales(frase) {
    let contadorVocales = {};
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if ('aeiou'.includes(letra)) {
            if (contadorVocales[letra]) {
                contadorVocales[letra]++;
            } else {
                contadorVocales[letra] = 1;
            }
        }
    }
    return contadorVocales;
}

// Llamada a la función principal para imprimir 
imprimir();