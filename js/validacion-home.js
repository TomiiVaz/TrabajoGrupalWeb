let establecimientos = [
    {
        "localidad" : "Barracas",
        "direccion" : "Brandsen 1604/6, CABA",
        "provincia" : "Buenos Aires",
        "email" : "barracas@joinus.edu.ar"
    },
    {
        "localidad" : "Caballito",
        "direccion" : "Av. Rivadavia 4601, CABA",
        "provincia" : "Buenos Aires",
        "email" : "caballito@joinus.edu.ar"
    },
    {
        "localidad" : "Retiro",
        "direccion" : "Suipacha 1333, CABA",
        "provincia" : "Buenos Aires",
        "email" : "sedecentral@joinus"
    },
    {
        "localidad" : "Lomas de zamora",
        "direccion" : "Av. Meeks 444, Lomas de Zamora",
        "provincia" : "Buenos Aires",
        "email" : "lomasdezamora@joinus.edu.ar"
    }
];


let cursos = [
    {
        "localidad" : "Barracas",
        "idioma" : "Alemán",
        "modalidad"  : "Presencial",
        "dias"  : "Lunes y Viernes, 18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "17.000"
    },
    {
        "localidad" : "Lomas de zamora",
        "idioma" : "Inglés",
        "modalidad"  : "Presencial y virtual",
        "dias"  : "Lunes y Viernes, 18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "10.000"
    },
    {
        "localidad" : "Caballito",
        "idioma" : "Chino",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves, 18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "20.000"
    },{
        "localidad" : "Retiro",
        "idioma" : "Italiano",
        "modalidad"  : "Presencial",
        "dias"  : "Martes y Jueves, 18:00 hs",
        "fecha_inicio"  : "01/03/21",
        "precio"  : "15.000"
    }
];

function filtrar(){
    // Obtener los valores de los selects (val)
    let establecimientoElegido = $("#establecimiento").val();

    // Filtrar el array de objetos (filter)
    let filtrado_establecimiento = establecimientos.filter(establecimiento => establecimiento.localidad == establecimientoElegido);
    let filtrado_curso = cursos.filter(curso => curso.localidad == establecimientoElegido);


    // Reseteamos establecimientos
    $("#establecimiento_nom").empty();
    $("#establecimiento_direc").empty();
    $("#establecimiento_prov").empty();
    $("#establecimiento_email").empty();

    // Reseteamos cursos 
    $("#idiomas").empty();
    $("#hor_mod").empty();
    $("#precio").empty();

    // Filtramos establecimientos
    filtrado_establecimiento.forEach(establecimiento => {
        $("#establecimiento_nom").append(`${establecimiento.localidad}`);
        $("#establecimiento_direc").append(`${establecimiento.direccion}`);
        $("#establecimiento_prov").append(`${establecimiento.provincia}`);
        $("#establecimiento_email").append(`${establecimiento.email}`);

        // guardamos items del establecimiento en local storage
        localStorage.setItem("establecimiento_nom", establecimiento.localidad);
      
    });

    // Filtramos cursos
    filtrado_curso.forEach(curso => {
        $("#idiomas").append(`<option value="${curso.idioma}">${curso.idioma}</option>`);
        $("#hor_mod").append(`<option value="${curso.modalidad} - ${curso.dias}">${curso.modalidad} - ${curso.dias}</option>`);
        $("#precio").val("$" + curso.precio);
        // guardamos items del curso en local storage
        localStorage.setItem("curso_idioma", curso.idioma);
        localStorage.setItem("curso_fechaInicio", curso.fecha_inicio);
        localStorage.setItem("curso_precio", curso.precio);
        localStorage.setItem("curso_horario", curso.dias);

    });  
}

$(document).ready(function(){
    $("#establecimiento").click(function(){
        filtrar();
    });
});
