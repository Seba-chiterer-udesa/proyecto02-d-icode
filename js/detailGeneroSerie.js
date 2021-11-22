window.addEventListener('load', function ( ){

// ACCEDO A LA QUERY STRING
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);

let idGenero = objetoQueryString.get('idGenero');
console.log(objetoQueryString.get('idGenero'));
let genero = objetoQueryString.get('genero');
console.log(genero);

    //FETCH SERIES
fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c0945689b0a582e110971301d6ea8be2&language=es&with_genres=${idGenero}`)
.then(function(response){
     return response.json();
})

 .then(function (datos) {
//     console.log(datos)

 document.querySelector('.tituloSeries').innerHTML += `<h2> • SERIES DE ${genero} ACLAMADAS POR EL PÚBLICO • </h2>`

     for (let i = 0; i< 10; i++){
     document.querySelector('.contenedorSerie').innerHTML += `
         <div class="hijo">
            <div class="imagen-port">
                 <a href="./detail-series.html?idSerie=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="ficha ${datos.results[i].name}"></a>
                 <h3>${datos.results[i].name}</h3>
                 <p>${datos.results[i].first_air_date}</p>
            </div>
         </div>
    `;  }
 })

 .catch(function (error) {
    console.log(`El error fue: ${error}`);
 })
 
})