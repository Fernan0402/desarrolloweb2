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

// Example starter JavaScript for disabling form submissions if there are invalid fields
$(document).ready(function () {
   'use strict'
 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.querySelectorAll('.needs-validation')
 
   // Loop over them and prevent submission
   Array.prototype.slice.call(forms)
     .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
 
         form.classList.add('was-validated')
       }, false)
     })
 })()