window.addEventListener("load", function(){

    // Gif que desaparece cuaando la carga se completa
    let gifLoading = document.querySelector('.gif')
    gifLoading.style.display = "none"

    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let busqueda = objetoQueryString.get('busqueda');
    let key = ("c0945689b0a582e110971301d6ea8be2");

    // fetch peliculas
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es&query=${busqueda}`)

        .then(function(response){
            return response.json();

        }).then(function(datos){

            if (datos.results.length== 0){
                document.querySelector('.titulo').innerHTML +=`
                <h2> • RESULTADOS DE BÚSQUEDA PARA "${busqueda}" NO TIENE COINCIDENCIAS •</h2>
                `
            }else{

                document.querySelector(".titulo").innerHTML+=`
                <h2> • RESULTADOS DE BÚSQUEDA PARA "${busqueda}" •</h2>`
    
                for(let i = 0; i < 5; i++){

                    console.log(datos.results) 
      
                   if(datos.results[i].poster_path != null) {
                    
                    document.querySelector('section').innerHTML += `
    
                    <div class="hijo">
                        <div class="imagen-port">
                            <a href="./detail-movies.html?idMovie=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt=""></a>
                            <h3>${datos.results[i].title}</h3>
                            <p>${datos.results[i].release_date}</p>
                        </div>
                    </div>  
                    `
                   }

            }
        }
        }).catch(function(error){
            console.log(`El error fue: ${error}`);
    })
    
        // fetch series
    
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=es&query=${busqueda}`)

        .then(function(response){
            return response.json();

        }).then(function(datos){

    
            for(let i = 0; i < 5; i++){

                console.log(datos.results)   
      
                if(datos.results[i].poster_path != null) {
                    
                document.querySelector('section').innerHTML += `
    
                    <div class="hijo">
                        <div class="imagen-port">
                            <a href="./detail-movies.html?idMovie=${datos.results[i].id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt=""></a>
                            <h3>${datos.results[i].name}</h3>
                            <p>${datos.results[i].first_air_date}</p>
                        </div>
                    </div>  
                    `
                }
            }
        }).catch(function(error){
            console.log(`El error fue: ${error}`);
        
        })
})
