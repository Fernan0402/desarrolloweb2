// Inicialización de variables
var contador = 0; // Inicializa un contador en 0
var cadena = "ColorPrint"; // Define la cadena de texto a mostrar en el título
var interval = setInterval(setChar, 500); // Establece un intervalo de tiempo para llamar a la función setChar cada 500 milisegundos

// Función para agregar caracteres al título
function setChar() {
    var max = cadena.length; // Obtiene la longitud de la cadena
    document.title += cadena[contador]; // Agrega el carácter actual de la cadena al título del documento
    contador++; // Incrementa el contador en 1

    // Reinicia el contador y el título si se supera la longitud de la cadena
    if (contador > max) {
        contador = 0;
        document.title = "";
    }

    // Agrega un guion al título si el carácter actual es un espacio en blanco
    if (cadena[contador] == " ") {
        document.title += "-";
    }
}

$(function(){
 var texto = "Santos Méndez";
 maquina("name",texto,100,0);
});

function maquina(contenedor,texto,intervalo,n){
 var i=0,
  timer = setInterval(function() {
  if ( i<texto.length ) {
   $("#"+contenedor).html(texto.substr(0,i++) + "|");
  } else {
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },6000);
   }
  }
 },intervalo);
};

$(function(){
 var texto = "2017-4853";
 maquina("matricula",texto,100,0);
});
function maquina(contenedor,texto,intervalo,n){
 var i=0,
  timer = setInterval(function() {
  if ( i<texto.length ) {
   $("#"+contenedor).html(texto.substr(0,i++) + "|");
  } else {
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },6000);
   }
  }
 },intervalo);
};

$(document).ready(function(){
 
   $('.botomarriba').click(function(){
      $('body, html').animate({
         scrollTop: '0px'
      }, 300);
   });
 
   $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
         $('.botomarriba').slideDown(300);
      } else {
         $('.botomarriba').slideUp(300);
      }
   });
 
});


 $(document).ready(function(){

   $('.vaina').click(function(){
      $('body, html').animate({
         scrollTop: '0px'
      }, 300);
   });
 
   $(window).scroll(function(){
      if( $(this).scrollTop() > 150 ){
         $('.vaina').slideDown(300);
      } else {
         $('.vaina').slideUp(300);
      }
   });
 
});


$(document).ready(function(){
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 100){
            
            $('header').addClass('header2');
        }else{
            $('header').removeClass('header2');
        }
        
    })
    
})
// Utilizando jQuery para capturar los datos del formulario al enviar
$('form').submit(function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores de los campos del formulario utilizando jQuery
    let nombre = $('#validationCustom01').val();
    let apellidos = $('#validationServer02').val();
    let email = $('#inputEmail3').val();
    let telefono = $('#telefono').val();
    let mensaje = $('#exampleFormControlTextarea1').val();
    
    // Crear un objeto con los datos del formulario
    let registro = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    };
    
    // Mostrar el registro en la consola
    console.log(registro);
    
    // Limpiar los campos del formulario después de enviar
    $(this)[0].reset();
});

$(document).ready(function() {
    // Cuando se envía un formulario
    $('form').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener la cantidad y el nombre del producto del formulario actual
        var quantity = $(this).find('#quantity').val();
        var productName = $(this).closest('.container').find('h1').text();

        // Enviar una solicitud AJAX al archivo procesar_compra.php
        $.ajax({
            type: "POST",
            url: "procesar_compra.php",
            data: { productName: productName, quantity: quantity },
            success: function(response) {
                // Mostrar un mensaje de éxito si la compra se procesa correctamente
                alert('Compra realizada con éxito. ¡Gracias por su compra!');
            },
            error: function(xhr, status, error) {
                // Mostrar un mensaje de error si hay un problema al procesar la compra
                alert('Error al procesar la compra. Por favor, inténtelo de nuevo.');
            }
        });
    });
});