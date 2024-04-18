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

//console.log("Arreglo con notas en 0:");
//console.log(Notas);
// Se utiliza la funcion map que recorre cada elemento del arreglo
// se utiliza el operador ...alumno que evita la modificacion de los objetos originales
Notas.forEach(nota => {
    nota.nota = Math.floor(Math.random() *(10-2+1)+2); // Genera un número aleatorio entre 2-10
});

Notas.forEach(nota=>{
    let $clasificar;
    switch(nota.nota){
        case 2: case 3: case 4:
            $clasificar="Insuficiente";
            break;
        case 5: case 6:
            $clasificar="Suficiente";
            break;
        case 7: case 8:
            $clasificar="Bien";
            break;
        case 9:
            $clasificar="Notable";
            break;
        case 10:
            $clasificar="Sobresaliente";
            break;
        default:
            $clasificar="Fuera de rango";
    }
    console.log(nota.nombre+" - "+ nota.nota+ ": "+$clasificar+"\n");
});


/*
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


/*
 Genera un array de 10 elementos
 Nombre:" " nota: "0" luego actualizar el array con natas randomico entre 2-10.
 Mostrar la nota mayor, menor y promedio.
 Listar las notas
 Insuficiente:[2, 4]
 Suficiente:[5,6]
 Bien:[7,8]
 Notable:[9]
 Sobresaliente:[10].
*/