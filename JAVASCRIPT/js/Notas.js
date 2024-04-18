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
        return $clasificar;
    });
}

function impNotas(){
    console.log(nota.nombre+" - "+ nota.nota+ ": "+clasificar()+"\n");
}

cargarNotas();
impNotas();