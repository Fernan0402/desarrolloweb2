// En base a 2 array de nombres y apellidos genere un nuevo array combinando de forma aleatoria ambos, 
// formatee los nombres convirtiendo el primer elemento del nombre y apellido en mayusculas y el resto 
// en minusculas
const NELEMENTOS=10;
// array de nobres
let nombres = ["juan", "maria", "pedro", "laura","diego"];
//array de apellidos.
let apellidos = ["gonzalez", "perez", "rodriguez", "fernandez", "jimenez"];
let nomape=[];//array con nombres y apellidos 

function combinarNombresAleatorios() {
    let nomal, apeal;
    for (let i = 0; i < NELEMENTOS; i++) {
        nomal = nombres[Math.floor(Math.random() * nombres.length)];
        apeal = apellidos[Math.floor(Math.random() * apellidos.length)];

        // Formatear el nombre y apellido antes de agregarlos al array 
        nomal = nomal.charAt(0).toUpperCase() + nomal.slice(1).toLowerCase();//combierte el primer elemento del nombre en mayuscula y el resto en minuscula
        apeal = apeal.charAt(0).toUpperCase() + apeal.slice(1).toLowerCase();//combierte el primer elemento del nombre en mayuscula y el resto en minuscula

        nomape.push(nomal + " " + apeal);
    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona+"\n");
    });
}
combinarNombresAleatorios();
imprimir();