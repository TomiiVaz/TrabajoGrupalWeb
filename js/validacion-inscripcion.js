
function validar(evento) {
  let error = false;
  let mensaje_error = "";


  let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;  // Expresión reg de email 

  $("#mensaje_error_email").empty();
  $("#mensaje_error").empty();

  if (!($("#email").val().match(regexEmail))) {
    error = true;
    let mensaje_error_email = "<p>El formato de email no es válido</p>";
    $("#mensaje_error_email").append(mensaje_error_email);

  }
  if ($("#nombre").val() == "" || $("#apellido").val() == "" || $("#telefono").val() == "" || $("#provincia").val() == "" || $("#ciudad").val() == "") {
    error = true;
    mensaje_error = "<p>Todos los campos son requeridos</p>";
    $("#mensaje_error").append(mensaje_error);
  }
  evento.preventDefault();

  if (error != true) {
    $("#nombre").val("");
    $("#apellido").val("");
    $("#telefono").val("");
    $("#email").val("");
    $("#ciudad").val("");
    $("#provincia").val("");
  
    $(".popup").fadeIn(1000);
    $("#cerrar").click(function () {
      $(".popup").fadeOut();

      // Cuando se hace click aca el popUp aparece, hay que meter esta funcion dentro de las validaciones a lo ultimo.
      $(".popup").css("display", "block");

      $("#cerrar").click(function () {
        $(".popup").fadeOut();
      });
    }

    )
  };
}

$(document).ready(function () {
  $(".popup").hide(); // Lo esconde porque no se si poniendo en css hidden y despues "Show" dentro de la funcion funciona.

  $("#form").submit(function (evento) {
    validar(evento);
  });
});
