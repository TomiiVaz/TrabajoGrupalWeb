
var error = false; 

    function validar_nombre(){
        // Variables del input nombre
        
        let mensaje_error_nombre = "";
        let regexNombre = /^[a-zA-Z-À-ÿ\s]{1,20}$/;
    
        resetear();// limpiamos el mensaje de validacion
        if($("#nombre").val().length == 0 || !($("#nombre").val().match(regexNombre))){
            error = true;
            mensaje_error_nombre = "<p>El formato ingresado es incorrecto o esta vacío</p>";
            $("#mensaje_error_nombre").append(mensaje_error_nombre);
            $("#nombre").addClass("error");
            
        }
    }
    
    function validar_email(evento){
        // Variables del input email
        let mensaje_error_email = "";
        let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;  // Expresión reg de email
    
        resetear();// limpiamos el mensaje de validacion
    
        if(!($("#email").val().match(regexEmail))){
            error = true;
            mensaje_error_email = "<p>El formato de email no es válido</p>";
            $("#mensaje_error_email").append(mensaje_error_email);
            $("#email").addClass("error");
            
        }
        console.log("validar nombre es igual a " + error);
    }
    
    function validar_telefono(){
        
        let mensaje_error_telefono = "";
        let regexTelefono = /^[0-9]{4}\-[0-9]{4}$/;  // Expresión reg de email
    
        resetear();
    
        if($("#telefono").val() != ""){
            if(!$("#telefono").val().match(regexTelefono)){
                error = true;
                mensaje_error_telefono = "<p>El formato del teléfono no es válido. Ej 4444-4444</p>";
                $("#mensaje_error_telefono").append(mensaje_error_telefono);
                $("#telefono").addClass("error");
 
            }
        }
        console.log("validar nombre es igual a " + error);
    }
    
/*Consulta, se debe limitar a 1000 caracteres y mostrar la cantidad de caracteres ingresados y resantes en tiempo real.*/
function validar_mensaje(){
   
    let mensaje_error_mensaje = "";
    
    let cantidad_de_caracteres_actuales = 0;
    const CANTIDAD_DE_CARACTERES_TOTALES = 30;


    resetear();
    cantidad_de_caracteres_actuales = $("#mensaje").val().length;
    let cantidad_de_caracteres_restantes = CANTIDAD_DE_CARACTERES_TOTALES  - cantidad_de_caracteres_actuales; 
    mensaje_error_mensaje = "<p>Caracteres actuales " + cantidad_de_caracteres_actuales + ", caracteres restantes: " + cantidad_de_caracteres_restantes + "</p>";
       

    if(cantidad_de_caracteres_actuales > CANTIDAD_DE_CARACTERES_TOTALES){
        error = true;
        mensaje_error_mensaje = "<p>No exceder los 1000 caracteres</p>";
        $("#mensaje").addClass("error");

    }
    
    $("#mensaje_error_mensaje").append(mensaje_error_mensaje);
    console.log("validar nombre es igual a " + error);
}

function resetear(){
    $("#mensaje_error_nombre").empty();
    $("#nombre").removeClass("error");
    $("#mensaje_error_email").empty();
    $("#email").removeClass("error");
    $("#mensaje_error_telefono").empty();
    $("#telefono").removeClass("error");
    $("#mensaje_error_mensaje").empty();
    $("#mensaje").removeClass("error");
}

function validar (){
    $("#nombre").keyup(function(){
        validar_nombre();
    });
    $("#telefono").keyup(function(){
        validar_telefono();
    });
    $("#mensaje").keyup(function(){
       validar_mensaje();
    });

    
    }
       
    

$(document).ready(function(){
    //console.log(error);
    validar();
    //console.log(error);
    $("#form").submit(function(evento){

        evento.preventDefault();
        validar_email(evento);
        
        if (!error){
            $("#mensaje").val("");
            $("#telefono").val("");
            $("#nombre").val("");
            $("#email").val("");
            $("#asunto").val("");

            $(".popup").fadeIn(1000);
            $("#cerrar").click(function () {
                $(".popup").fadeOut();
              });
         }
    });  

   
});














