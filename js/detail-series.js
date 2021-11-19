window.addEventListener('load', function(){
// ACCEDO A LA QUERY STRING
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
   // console.log(objetoQueryString.get('idSerie'))
    let idSerie = objetoQueryString.get('idSerie');
    console.log(idSerie);
//FETCH
fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=c0945689b0a582e110971301d6ea8be2`)
.then(function(response){
    return response.json();
})
.then(function(datos) {
    console.log(datos);
    
    let generos =""
    for (let i =0; i < datos.genres.length; i++ ){
        generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
    }
    console.log(generos)
        document.querySelector('.titulo').innerHTML += `
            <h2>• ${datos.name}• </h2>
        `
        document.querySelector('.hijo-detail-series').innerHTML += `
        
            <div class="imagen-port series">
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}">
                <h3>${datos.name}</h3>
                <p>${generos}</p>
                <p>${datos.first_air_date } ‧ ${datos.number_of_seasons}</p>
            </div>
            <div class="detailseriessinopsis-container">  
                <h2>${datos.name}</h2>                     
                <h3> Género: ${generos}</h3>
                <h3>Clasificación: ${datos.type}</h3>
                <h3>Sinópsis: ${datos.overview}</h3>
                <h3>Calificación promedio: ${datos.vote_average}</h3>

                <h3>Total de Reseñas:${datos.vote_count}</h3>
            <div>

            <div class="boton-favoritos">
                    <div class="detail-favoritos">
                        <i class="fas fa-star star"></i>
                        <a href="./favourite.html"><h3>Agregar a Favoritos</h3></a>   
                    </div>
            </div>   
       
        `

})
.catch(function (error) {
    console.log(`El error fue: ${error}` );
})

})