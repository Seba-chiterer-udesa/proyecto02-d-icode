window.addEventListener("load",function(){
 
// Header busqueda
     
let formulario = document.querySelector ("form");
let campoBuscar = document.querySelector ("[name=busqueda]");
let mensaje = document.querySelector(".alert");
let busqueda = document.querySelector(".header-busqueda input");
let lupaBusqueda = document.querySelector(".lupa");
     
formulario.addEventListener("submit",function(e){
    e.preventDefault(); 
    if(campoBuscar.value == ""){   
        mensaje.innerText = 'Búsqueda vacía';
        busqueda.style.marginBottom = '5px';
        mensaje.style.marginBottom = '12px';
    } else if (campoBuscar.value.length < 3){ 
        mensaje.innerText = 'Ingrese al menos 3 caracteres';
        busqueda.style.marginBottom = '5px';
        mensaje.style.marginBottom = '12px';
        mensaje.style.fontSize = '11px';
    } else {
        this.submit();
}})
     
campoBuscar.addEventListener('input', function(){
    mensaje.innerText = "";
})

lupaBusqueda.addEventListener("click",function(e){
    e.preventDefault(); 
    if(campoBuscar.value == ""){   
        mensaje.innerText = 'Búsqueda vacía';
        busqueda.style.marginBottom = '5px';
        mensaje.style.marginBottom = '12px';
    } else if (campoBuscar.value.length < 3){ 
        mensaje.innerText = 'Ingrese al menos 3 caracteres';
        busqueda.style.marginBottom = '5px';
        mensaje.style.marginBottom = '12px';
        mensaje.style.fontSize = '11px';
    } else {
        this.submit();
}})

})
