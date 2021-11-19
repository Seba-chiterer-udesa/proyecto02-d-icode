window.addEventListener('load', function(){

    let favoritos = [];
    
    if (localStorage.getItem('idMoviesToString')!=null) {
        
        favoritos = JSON.parse(localStorage.getItem('idMoviesToString'));
        console.log(favoritos);
       
        for(let i = 0; i < favoritos.length; i++){
    
            fetch(`https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=c0945689b0a582e110971301d6ea8be2`)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                                        
                    document.querySelector('section').innerHTML += `
                    <div class="imagen-port series">
                        <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.poster_path}" alt="ficha ${datos.title}">
                        <h3>${datos.title}</h3>
                    </div>
                    `;
    
                })
                .catch(function(error){
                    console.log(`El error fue: ${error}`);
                })
    
        }
    
    }else{
    
        document.querySelector('section').innerHTML += `
            <article>
                <h3>No has agregado peliculas en favoritos</h3>
            </article>
        `;
    
    }
        
    })
    