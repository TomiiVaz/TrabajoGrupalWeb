// 1- creamos el array 
let cursos = [
    {
        "localidad" : "Barracas",
        "idioma" : "Alemán",
        "nivel" : "Inicial",
        "modalidad"  : "Presencial",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/alemania.jpg"
    },
    {
        "localidad" : "Lomas de Zamora",
        "idioma" : "Inglés",
        "nivel" : "Inicial",
        "modalidad"  : "Presencial y virtual",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/britanica.jpg"
    },
    {
        "localidad" : "Caballito",
        "idioma" : "Chino",
        "nivel" : "Inicial",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/china.jpg"
    },
    {
        "localidad" : "Retiro",
        "idioma" : "Italiano",
        "nivel" : "Inicial",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/italia.jpg"
    },
    {
        "localidad" : "Barracas",
        "idioma" : "Alemán",
        "nivel" : "Intermedio",
        "modalidad"  : "Presencial",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/alemania.jpg"
    },
    {
        "localidad" : "Lomas de Zamora",
        "idioma" : "Inglés",
        "nivel" : "Intermedio",
        "modalidad"  : "Presencial y virtual",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/britanica.jpg"
    },
    {
        "localidad" : "Caballito",
        "idioma" : "Chino",
        "nivel" : "Intermedio",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/china.jpg"
    },
    {
        "localidad" : "Retiro",
        "idioma" : "Italiano",
        "nivel" : "Intermedio",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/italia.jpg"
    },
    {
        "localidad" : "Barracas",
        "idioma" : "Alemán",
        "nivel" : "Avanzado",
        "modalidad"  : "Presencial",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/alemania.jpg"
    },
    {
        "localidad" : "Lomas de Zamora",
        "idioma" : "Inglés",
        "nivel" : "Avanzado",
        "modalidad"  : "Presencial y virtual",
        "dias"  : "Lunes y Viernes",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/britanica.jpg"
    },
    {
        "localidad" : "Caballito",
        "idioma" : "Chino",
        "nivel" : "Avanzado",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/china.jpg"
    },
    {
        "localidad" : "Retiro",
        "idioma" : "Italiano",
        "nivel" : "Avanzado",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves",
        "horarios"  : "18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10000",
        "imagen"  : "img/italia.jpg"
    }
    
];


function filtrar(){
    // Obtener los valores de los selects (val)
    let localidad = $("#localidad").val();
    let idioma = $("#idioma").val();

    // Filtrar el array de objetos (filter)
    let filtrado = cursos.filter(curso_item => curso_item.localidad == localidad && curso_item.idioma == idioma);

    // Vaciar el section de los cursos (empty)
    $(".curso-ocultar").empty();
    $("#cursos_filtrados").empty(); // reseteamos para que no se siga mostrando el filtrado anterior

    // recorrer el array, y lo llenamos con los datos correspondientes (append)
    if(filtrado != 0){
        filtrado.forEach(curso => {
            $("#cursos_filtrados").append(`
                <article class="informacion informacion-filtrada">
                    <div class="bandera">
                        <img src="${curso.imagen}" alt="Bandera del curso ${curso.idioma}">
                    </div>
                    <div class="informacion-curso">
                        <h3>${curso.idioma} - ${curso.nivel}</h3>
                        <div class="datos">
                            <ul class="titulos-datos">
                                <li>
                                    <h5>Modalidad:</h5>
                                    <p>${curso.modalidad}</p>
                                </li>
                                <li>
                                    <h5>Días: </h5>
                                    <p>${curso.dias}</p>
                                </li>
                                <li>
                                    <h5>Horarios:</h5>
                                    <p> ${curso.horarios}</p>
                                </li>
                                <li>
                                    <h5>Fecha de inicio:</h5>
                                    <p> ${curso.fecha_inicio} </p>
                                </li>
                                <li>
                                    <h5>Localidad:</h5>
                                    <p> ${curso.localidad} </p>
                                </li>
                                <div class="contenedor-inscripcion">
                                <li>
                                    <h4>Precio: $${curso.precio}.-</h4>
                                </li>
                                <a href="inscripcion.html">Inscribite!</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </article>
            `);
        });
    }else{
        $("#cursos_filtrados").append(`<p class="filtro-sin-resultados">No se ofrece cursos de ${idioma} en la localidad de ${localidad}</p>`);
    }
}



$(document).ready(function(){
    $("#filtrar").click(function(){
        filtrar();
    });
});