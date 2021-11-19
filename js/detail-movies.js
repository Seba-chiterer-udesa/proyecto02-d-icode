window.addEventListener("load",function(){

    //Accedo a la Query String

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idMovie = objetoQueryString.get('idMovie');
    console.log(idMovie)

    //Fetch Peliculas Populares

    fetch (`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c0945689b0a582e110971301d6ea8be2`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
    console.log(datos);

    let generos = ""
    for (let i =0; i < datos.genres.length; i++ ){
        generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
    }

    /* console.log(generos); */

    document.querySelector('.titulo').innerHTML = `
        <h2>• ${datos.title}• </h2>
    `

    document.querySelector('.contenedor').innerHTML = `
    <div class="hijo-detail-series">
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}">
                <h3>${datos.title}</h3>
                <p>${generos}</p>
            </div>
            <div class="detailseriessinopsis-container">                       
                <h3 class="movie"> Género: ${generos}</h3>
                <h3 class="movie"> Clasificación: ${datos.vote_average}</h3>
                <h3 class="movie"> Duración: ${datos.type}</h3>
                <h3 class="movie"> Sinópsis: ${datos.overview}</h3>
                <h3 class="movie"> Total de Reseñas:${datos.vote_count}</h3>
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

    //Fetch Peliculas con mejor rating

    fetch (`https://api.themoviedb.org/3/movie/${idMovie}?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
    console.log(datos);

    let generos = ""
    for (let i =0; i < datos.genres.length; i++ ){
        generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
    }

    /* console.log(generos); */

    document.querySelector('.titulo').innerHTML = `
        <h2>• ${datos.title}• </h2>
    `

    document.querySelector('.contenedor').innerHTML = `
    <div class="hijo-detail-series">
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}">
                <h3>${datos.title}</h3>
                <p>${generos}</p>
            </div>
            <div class="detailseriessinopsis-container">                       
                <h3 class="movie"> Género: ${generos}</h3>
                <h3 class="movie"> Clasificación: ${datos.vote_average}</h3>
                <h3 class="movie"> Duración: ${datos.type}</h3>
                <h3 class="movie"> Sinópsis: ${datos.overview}</h3>
                <h3 class="movie"> Total de Reseñas:${datos.vote_count}</h3>
            <div>
            <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star"></i>
                        <a href="./favourite.html"><h3>Agregar a Favoritos</h3></a>   
                    </div>
            </div>g
`;

    })
    .catch(function (error) {
        console.log (`El error fue: ${error}`);
    })

})