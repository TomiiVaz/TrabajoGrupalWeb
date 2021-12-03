let establecimientos = [
  {
    "Localidad": "Barracas",
    "Direccion": "Brandsen 1604/6, CABA",
    "Provincia": "Buenos Aires",
    "Imagen": "img/img_sedes/establecimiento-barracas.jpeg",
    "Href": "establecimientos-detalles-one.html",
  },
  {
    "Localidad": "Caballito",
    "Direccion": "Av. Rivadavia 4601, CABA",
    "Provincia": "Buenos Aires",
    "Imagen": "img/img_sedes/establecimiento-caballito.jpeg",
    "Href": "establecimientos-detalles-two.html",
  },
  {
    "Localidad": "Lomas de Zamora",
    "Direccion": "Av. meeks 444, Lomas de Zamora",
    "Provincia": "Buenos Aires",
    "Imagen": "img/img_sedes/establecimiento-lomas-de-zamora.jpeg",
    "Href": "establecimientos-detalles-three.html",
  },
  {
    "Localidad": "Retiro",
    "Direccion": "Suipacha 1333, CABA",
    "Provincia": "Buenos Aires",
    "Imagen": "img/img_sedes/establecimiento-retiro.jpeg",
    "Href": "establecimientos-detalles-four.html",
  },
];

function filtrar() {
  // Valor del select
  let localidad = $("#select-establecimiento").val();

  // Filtrar
  let filtrado = establecimientos.filter(
    (estab) => estab.Localidad == localidad
  );

  console.log(filtrado);

  // Vaciar
  $(".contenedor-main").empty();
  $("#establecimiento-filtrado").empty();

  // Recorrer
  filtrado.forEach(establecimientos => {
    $("#establecimiento-filtrado").append(`
    <section class="establecimiento">
      <article class="img-cont">
          <img src="${establecimientos.Imagen}">
      </article>
      <article class="number-text">
          <h3>${establecimientos.Localidad}</h3>
          <h4>Direccion:</h4>
          <p>${establecimientos.Direccion}</p>
          <h4>Provincia:</h4>
          <p>${establecimientos.Provincia}</p>
          <div>
              <a href="${establecimientos.Href}">Ver detalles</a>
          </div>
          </article>
    </section>`
    );
  });
}

$(window).ready(function () {
  $("#filtrar").click(function () {
    filtrar();
  });
});
