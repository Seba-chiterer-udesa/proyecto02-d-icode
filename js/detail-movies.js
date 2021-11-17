window.addEventListener("load",function(){

    //Accedo a la Query String

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idMovie = objetoQueryString.get('idMovie');
    console.log(idMovie)

    //Fetch

    fetch (`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c0945689b0a582e110971301d6ea8be2`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
    console.log(datos);

    document.querySelector('.titulo').innerHTML = `
        <h2>• ${datos.title}• </h2>
    `

    document.querySelector('.contenedor').innerHTML = `
    <div class="hijo-detail-series">
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}">
                <h3>${datos.title}</h3>
                <p>${datos.genres}</p>
                <p>${datos.first_air_date } ‧ ${datos.results.next_episode_to_air.number_of_seasons}</p>
            </div>
            <div class="detailseriessinopsis-container">                       
                <h3> Género: ${datos.genres}</h3>
                <h3> Clasificación: ${datos.type}</h3>
                <h3> Duración: ${datos.type}</h3>
                <h3> Sinópsis: ${datos.overview}</h3>
                <h3> Calificación promedio: ${datos.vote_average}</h3>
                <h3> Total de Reseñas:${datos.vote_count}</h3>
            <div>
            <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star"></i>
                        <a href="./favourite.html"><h3>Agregar a Favoritos</h3></a>   
                    </div>
            </div>
`;

    })
    .catch(function (error) {
        console.log (`El error fue: ${error}`);
    })


})