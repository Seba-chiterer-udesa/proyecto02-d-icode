window.addEventListener('load',function(){

fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c0945689b0a582e110971301d6ea8be2')
.then(function(response){
    return response.json();
})
.then (function(datos){

    
    for(let i = 0; i< 5; i++){
        
    document.querySelector('.contenedor').innerHTML += `
    <div class="hijo">
    <div class="imagen-port">
        <a href="./detail-movies.html"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${datos.results[i].poster_path}" alt="ficha ${datos.results[i].title}"></a>
        <h3>${datos.results[i].title}</h3>
        <p>${datos.results[i].release_date}</p>
    </div>
</div>
    `
    }
})
.catch(function (error) {
    console.log(`El error fue: ${error}`);
})



})