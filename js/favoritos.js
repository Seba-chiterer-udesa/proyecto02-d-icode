window.addEventListener('load', function(){

    let favoritos = [];
    
    //PELICULAS FAVORITAS

    if (localStorage.getItem('idMoviesToString') != null) {
        
        favoritos = JSON.parse(localStorage.getItem('idMoviesToString'));
        console.log(favoritos);
       
        for(let i = 0; i < favoritos.length; i++){
    
            fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                                      
                    console.log(datos);

                    document.querySelector('.moviefav').innerHTML += `
                    <div class="imagen-port series">
                    <a href="./detail-movies.html?idMovie=${datos.id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}"></a>
                    <h3>${datos.title}</h3>
                    </div>
                    `;
    
                })
                .catch(function(error){
                    console.log(`El error fue: ${error}`);
                })
    
        }
    
    }else{
    
        document.querySelector('.moviefav').innerHTML = `
        <article>
            <h3>No has agregado peliculas en favoritos</h3>
        </article>
        `;
    
    }

    //SERIES FAVORITAS

    if (localStorage.getItem('idSeriesToString') != null) {
        
        favoritos = JSON.parse(localStorage.getItem('idSeriesToString'));
        console.log(favoritos);
       
        for(let i = 0; i < favoritos.length; i++){
    
            fetch(`https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                                      
                    console.log(datos);

                    document.querySelector('.seriefav').innerHTML += `
                    <div class="imagen-port series">
                    <a href="./detail-series.html?idSerie=${datos.id}"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}"></a>
                    <h3>${datos.name}</h3>
                    </div>
                    `;
    
                })
                .catch(function(error){
                    console.log(`El error fue: ${error}`);
                })
    
        }
    
    }else{
    
        document.querySelector('.seriefav').innerHTML = `
            <article>
                <h3>No has agregado series en favoritos</h3>
            </article>
        `;
    
    }
        
    })
    