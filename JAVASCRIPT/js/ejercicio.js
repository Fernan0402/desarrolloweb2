// Función para generar un número aleatorio entre un rango dado
let Notas = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Maria', nota: 0 },
    { nombre: 'Rene', nota: 0 },
    { nombre: 'Pedro', nota: 0 },
    { nombre: 'Alicia', nota: 0 },
    { nombre: 'Carlos', nota: 0 },
    { nombre: 'Carla', nota: 0 },
    { nombre: 'Uriel', nota: 0 },
    { nombre: 'July', nota: 0 },
    { nombre: 'Mario', nota: 0 }
];

console.log("Arreglo con notas en 0:");
console.log(Notas);
// Se utiliza la funcion map que recorre cada elemento del arreglo
let NotasRandom=Notas.map(alumno =>({...alumno}));// se utiliza el operador ...alumno que evita la modificacion de los objetos originales
NotasRandom.forEach((alumno) => {
    alumno.nota = Math.floor(Math.random() * 81) + 20; // Genera un número aleatorio entre 20 y 100
});
console.log("Arreglo actualizado con notas aleatorias entre 20 y 100:");
console.log(NotasRandom);

// Encontrar la nota más alta
let notaMasAlta = Math.max(...NotasRandom.map(alumno => alumno.nota));

// Encontrar la nota más baja
let notaMasBaja = Math.min(...NotasRandom.map(alumno => alumno.nota));

// Calcular el promedio de las notas
let sumaNotas = NotasRandom.reduce((total, alumno) => total + alumno.nota, 0);
let promedioNotas = sumaNotas / NotasRandom.length;

console.log("Nota más alta: " + notaMasAlta);
console.log("Nota más baja: " + notaMasBaja);
console.log("Promedio de las notas: " + promedioNotas);
