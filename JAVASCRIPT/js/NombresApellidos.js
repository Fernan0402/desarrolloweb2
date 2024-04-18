// Array con 20 nombres
const NELEMENTOS=20;

let nombres = [
    "Juan", "María", "Pedro", "Ana", "Luis", 
    "Carolina", "Javier", "Sofía", "Diego", "Laura",
    "Carlos", "Valeria", "Miguel", "Isabel", "Pablo",
    "Camila", "Andrés", "Lucía", "Martín", "Elena"
];

// Array con 20 apellidos
let apellidos = [
    "García", "Martínez", "López", "Rodríguez", "Pérez",
    "González", "Sánchez", "Ramírez", "Torres", "Fernández",
    "Ruiz", "Díaz", "Vargas", "Reyes", "Jiménez",
    "Moreno", "Hernández", "Flores", "Gutiérrez", "Navarro"
];

let nomape=[];

function generarNomApe(){
    let nomal, apeal;
    for(let i=0;i<NELEMENTOS;i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+" "+apeal);
    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona+"\n");
    });
}

generarNomApe();
imprimir();
/*
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNombresCompletos(nombres, apellidos) {
    let nombresCompletos = [];
    for (let i = 0; i < 20; i++) {
        let nombreAleatorio = nombres[getRandomNumber(0, 19)];
        let apellidoAleatorio = apellidos[getRandomNumber(0, 19)];
        let nombreCompleto = nombreAleatorio + " " + apellidoAleatorio;
        nombresCompletos.push(nombreCompleto);
    }
    return nombresCompletos;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Nombres:", nombres);
console.log("Apellidos:", apellidos);

let nombresCompletos = generarNombresCompletos(nombres, apellidos);
console.log("Nombres Completos:");
console.log(nombresCompletos);
*/