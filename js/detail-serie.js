window.addEventListener('load', function(){
    //Declaro el array de favoritos

    let favoritos = [];

    // ACCEDO A LA QUERY STRING
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let idSerie = objetoQueryString.get('idSerie');
    console.log(idSerie);

//FETCH
fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
.then(function(response){
    return response.json();
})
.then(function(datos) {
    console.log(datos);
    
    let generos = ""
    for (let i = 0; i < datos.genres.length; i++ ){
        generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
    }
    
    console.log(generos)
        document.querySelector('.titulo').innerHTML += `
            <h2>• ${datos.name}• </h2>
        `
        document.querySelector('.hijo-detail-series').innerHTML += `
        
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.name}">
                <h3>${datos.name}</h3>
                <p>${generos}</p>
                <p>${datos.first_air_date } ‧ ${datos.number_of_seasons} temporadas</p>
            </div>
            <div class="detailseriessinopsis-container">  
                <h3 class="movie">Título: ${datos.name}</h3>                     
                <h3 class="movie">Género: ${generos}</h3>
                <h3 class="movie">Clasificación: ${datos.type}</h3>
                <h3 class="movie">Sinópsis: ${datos.overview}</h3>
                <h3 class="movie">Calificación promedio: ${datos.vote_average}</h3>
                <h3 class="movie">Total de Reseñas:${datos.vote_count}</h3>
            <div>

            <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star" id="star"></i>
                        <button class="fav">Agregar a Favoritos</button>   
                    </div>
            </div>   
       
        `;

    // Selector del botón favorito
    let buttonFav = document.querySelector('.fav');
        
    // localStorage
        
    if(localStorage.getItem('idSeriesToString') != null){
        favoritos = JSON.parse(localStorage.getItem('idSeriesToString'));
        if(favoritos.includes(idSerie)) {
            buttonFav.innerHTML = `Remover de favoritos`;
        }else{
            buttonFav.innerHTML = `Agregar a favoritos`;
        }
    }
    
    // Evento del botón agregar/remover favorito

    buttonFav.addEventListener('click', function(e){

        if (favoritos.includes(idSerie)){
            favoritos.splice(favoritos.indexOf(idSerie),1);
            buttonFav.innerHTML = `Agregar a favoritos`;
        }else{
            favoritos.push(idSerie);
            buttonFav.innerHTML = `Remover de favoritos`;
        }
        
        localStorage.setItem('idSeriesToString', JSON.stringify(favoritos));
        console.log(localStorage);

    })

    })
    .catch(function (error) {
        console.log (`El error fue: ${error}`);  
        
})


})