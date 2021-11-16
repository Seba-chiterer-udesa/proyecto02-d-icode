window.addEventListener('load', function(){
// ACCEDO A LA QUERY STRING
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
   // console.log(objetoQueryString.get('idSerie'))
    let idSerie = objetoQueryString.get('idSerie');
//FETCH
fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=c0945689b0a582e110971301d6ea8be2`)
.then(function(response){
    return response.json();
})
.then(function(datos) {
    console.log(datos);
        document.querySelector('.titulo').innerHTML += `
            <h2>• ${datos.results[idSerie].title}• </h2>
        `
        document.querySelectorAll('.contenedorSerie').innerHTML += `
        <div class="hijo-detail-series">
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[idSerie].poster_path}" alt="ficha ${datos.results[idSerie].title}">
                <h3>${datos.results[idSerie].title}</h3>
                <p>${datos.results[idSerie].genres}</p>
                <p>${datos.results[idSerie].first_air_date } ‧ ${datos.results[idSerie].next_episode_to_air.number_of_seasons}</p>
            </div>
            <div class="detailseriessinopsis-container">                       
                <h3> Género: ${datos[idSerie].genres}</h3>
                <h3>Clasificación: ${datos.results[idSerie].type}</h3>
                <h3>Sinópsis: ${datos.results[idSerie].overview}</h3>
                <h3>Calificación promedio: ${datos.results[idSeris].vote_average}</h3>
                <h3>Total de Reseñas:${datos.results[idSeris].vote_count}</h3>
            <div>
            <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star"></i>
                        <a href="./favourite.html"><h3>Agregar a Favoritos</h3></a>   
                    </div>
            </div>   
        </div>
        `

})
.catch(function (error) {
    console.log(`El error fue: ${error}` );
})

})