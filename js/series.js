window.addEventListener('load', function(){
    fetch (`https://api.themoviedb.org/3/tv/popular?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
        .then(function(response){
            return response.json();
        })
        .then (function(datos){
    
            
            for(let i = 9; i < 19; i++){
    
            document.querySelector('.contenedor').innerHTML += `
            <div class="hijo">
                <div class="imagen-port">
                    <a href="./detail-series.html?idSerie=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="ficha ${datos.results[i].title}"></a>
                    <h3>${datos.results[i].name}</h3>
                    <p>${datos.results[i].first_air_date}</p>
                </div>
            </div>
            `
            console.log(datos);
        }
        })
        .catch(function (error) {
            console.log(`El error fue: ${error}`);
        })
    })