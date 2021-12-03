let establecimiento = localStorage.getItem("establecimiento_nom");
let horario = localStorage.getItem("curso_horario");
let fecha_inicio = localStorage.getItem("curso_fechaInicio");
let precio = localStorage.getItem("curso_precio");
let idioma = localStorage.getItem("curso_idioma");

$(document).ready(function(){
    $("#primer_parrafo").text("Inscripción al curso del idioma " + idioma + " en la sede " + establecimiento + " en el horario " + horario);
    $("#segundo_parrafo").text("El curso inicia el día " + fecha_inicio);
    $("#tercer_parrafo").text("El precio es de $" + precio);
});