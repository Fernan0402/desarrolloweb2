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

function genRandomico(max, min){
    return Math.floor(Math.random()*(max-min+1)+2);
}

function cargarNotas(){
    Notas.forEach(nota=>{
        nota.nota = genRandomico(10, 2);
    });
}

function clasificar(nota){
    switch(nota){
        case 2:
        case 3:
        case 4:
            return "Insuficiente";
        case 5:
        case 6:
            return "Suficiente";
        case 7:
        case 8:
            return "Bien";
        case 9:
            return "Notable";
        case 10:
            return "Sobresaliente";
        default:
            return "Fuera de rango";
    }
}

function impNotas(){
    Notas.forEach(nota=>{
        let clasificacion = clasificar(nota.nota);
        console.log(nota.nombre + " - " + nota.nota + ": " + clasificacion + "\n");
    });
}

cargarNotas();
impNotas();