window.addEventListener("load",function(){
// ACCEDO A LA QUERY STRING
let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
// console.log(objetoQueryString.get('idSerie'))
let idSerie = objetoQueryString.get('idGenero');
//FETCH



})