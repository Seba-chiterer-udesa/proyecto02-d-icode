window.addEventListener("load",function(){
// ACCEDO A LA QUERY STRING
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);

let idGenero = objetoQueryString.get('idGenero');
console.log(objetoQueryString.get('idGenero'))

document.querySelector('.fotodrama').innerHTML += `<a href="detail-genres.html?idGenero=${datos.genres[i].id}">${datos.genres[i].name} </a>`;
//FETCH
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${c0945689b0a582e110971301d6ea8be2}&language=es&with_genres=${codigo}`)
.then(function(response){
    return response.json();
})

.then(function (datos) {
    
})

.catch(function (error) {
    console.log(`El error fue: ${error}`);
})


})