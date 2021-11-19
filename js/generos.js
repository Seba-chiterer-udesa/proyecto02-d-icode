window.addEventListener('load',function(){

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
    .then(function(response){
        return response.json();
    })
    .then (function(datos){
        console.log(datos.genres)
        let generos = ""
    
        for (let i =0; i < datos.genres.length; i++ ){
            generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
        }
        
        document.querySelector(".generoPeliculas").innerHTML += `
            <p>${generos}</p>
            
        
        
        `
    })
    .catch(function (error) {
        console.log(`El error fue: ${error}`);
    })
    
    
    })





fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=c0945689b0a582e110971301d6ea8be2&language=es`)
.then(function(response){
    return response.json();
})
.then (function(datos){
    console.log(datos.genres)
    let generos = ""

    for (let i =0; i < datos.genres.length; i++ ){
        generos += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`
    }
    
    document.querySelector(".generoSeries").innerHTML += `
        <p>${generos}</p>
    
    
    `
})
.catch(function (error) {
    console.log(`El error fue: ${error}`);
})


