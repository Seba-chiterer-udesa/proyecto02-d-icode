window.addEventListener("load",function(){
// ACCEDO A LA QUERY STRING
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);

let idGenero = objetoQueryString.get('idGenero');
console.log(objetoQueryString.get('idGenero'))
//FETCH
fetch(`https://api.themoviedb.org/3/${idGenero}/tv/list?api_key=c0945689b0a582e110971301d6ea8be2`)
.then(function(response){
    return response.json();
})

.then()

.catch(function (error) {
    console.log(`El error fue: ${error}`);
})


})