//Escribir un programa donde nos solicite un usuario y contraseña, validar la contraseña con "D153n0W3b2"
// y el usuario deberia ser cualquiera de los siguentes nombres: juan, pedro, raul.
// Función que solicita al usuario que ingrese sus credenciales
function solicitarCredenciales() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contrasena = prompt("Ingrese su contraseña:");
    validarCredenciales(usuario, contrasena);
}

// Función que valida las credenciales ingresadas por el usuario
function validarCredenciales(usuario, contrasena) {
    let usuariosValidos = ["juan", "pedro", "maria", "raul"];
    let contrasenaValida = "D153n0W3b2";

    // Verificar si el usuario y la contraseña son válidos
    if (usuariosValidos.includes(usuario.toLowerCase()) && contrasena === contrasenaValida) {
        console.log("Credenciales válidas. ¡Bienvenido!");
    } else {
        console.log("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
}

// Llamada a la función para solicitar y validar las credenciales
solicitarCredenciales();