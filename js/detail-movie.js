window.addEventListener("load",function(){

    let favoritos = [];

    //Accedo a la Query String

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idMovie = objetoQueryString.get('idMovie');
    console.log(idMovie)

    //Fetch Detalle Pelicula

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
                        <button class="fav"><h3>Agregar a Favoritos</h3></button>   
                    </div>
            </div>
`;

    // Selector del botón favorito
    let buttonFav = document.querySelector('.fav');
        
    // localStorage
        
    if(localStorage.getItem('idMoviesToString')!=null){
        favoritos = JSON.parse(localStorage.getItem('idMoviesToString'));
        if(favoritos.includes(idMovie)) {
            buttonFav.innerHTML = `Remover de favoritos`;
        }else{
            buttonFav.innerHTML = `Agregar a favoritos`;
        }
    }
    
    // Evento del botón agregar/remover favorito

    buttonFav.addEventListener('click', function(e){

        if (favoritos.includes(idMovie)){
            favoritos.splice(favoritos.indexOf(idMovie),1);
            buttonFav.innerHTML = `Agregar a favoritos`;
        }else{
            favoritos.push(idMovie);
            buttonFav.innerHTML = `Remover de favoritos`;
        }
        
        localStorage.setItem('idMoviesToString', JSON.stringify(favoritos));
        console.log(localStorage);

    })

    })
    .catch(function (error) {
        console.log (`El error fue: ${error}`);
    })
})