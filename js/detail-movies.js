window.addEventListener("load",function(){

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idMovie = objetoQueryString.get('idMovie');
    console.log(idMovie)

    fetch (`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c0945689b0a582e110971301d6ea8be2`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
    console.log(datos);
    document.querySelector('.contenedor').innerHTML = `
            <div class="hijo-detail-series">
                <div class="imagen-port series">
                    <a href="./detail-movies.html"><img src="${datos.results.poster_path}" alt="imagen de la pelicula"></a>
                    <h3>${datos.results.title}</h3>
                    <p>Fecha de estreno ${datos.results.release_date}</p>
                </div>
                <div class="detailseriessinopsis-container">                       
                    <h3>Género: Accion, Aventura, Ciencia Ficción y Fantasía</h3>
                    <h3>Clasificación: Intensas secuencias de acción y violencia de ciencia ficción,
                        lenguaje y algunas referencias crudas.</h3>
                    <h3>Sinópsis: Después de los eventos devastadores de "Avengers:
                        Infinity War", el universo está en ruinas debido a las acciones 
                        de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron,
                        los Vengadores deberán reunirse una vez más para intentar detenerlo
                        y restaurar el orden en el universo de una vez por todas.</h3>
                    <h3>Calificación: Al 75% de los usuarios le gustó la película.
                        Calificación promedio: 4/5.
                        Total de Reseñas: 213.</h3>   
                <div>
                <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star"></i>
                        <a href="./favourite.html"><h3>Agregar a Favoritos</h3></a>   
                    </div>
                </div>
            </div>
`;

    })
    .catch(function (error) {
        console.log(`El error fue: ${error}`);
    })


})