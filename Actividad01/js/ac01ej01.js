//Escribir un programa donde nos de la bien venida y nos indique en que navegador estamos ejecutando.
function darBienvenida() {
    console.log("¡Bienvenido a la página!");
}
// Función para obtener el navegador actual 
function obtenerNavegador() {
    let navegador = ""; // Variable para almacenar el nombre del navegador
    // Utilizamos un switch para evaluar diferentes casos basados en la presencia del nombre del navegador en navigator.userAgent
    switch (true) {
        case navigator.userAgent.indexOf("Chrome") != -1:
            navegador = "Google Chrome";
            break;
        case navigator.userAgent.indexOf("Firefox") != -1:
            navegador = "Mozilla Firefox";
            break;
        case navigator.userAgent.indexOf("Safari") != -1:
            navegador = "Safari";
            break;
        case navigator.userAgent.indexOf("Edge") != -1:
            navegador = "Microsoft Edge";
            break;
        case navigator.userAgent.indexOf("MSIE") != -1:
            navegador = "Internet Explorer";
            break;
        default:
            navegador = "Otro navegador"; // Se asigna "Otro navegador" si no se cumple ninguno de los casos anteriores
    }

    // Imprimimos en la consola el nombre del navegador que se está utilizando
    console.log("Estás utilizando el navegador: " + navegador);
}
//Llamada a las funciones 
darBienvenida();
obtenerNavegador();