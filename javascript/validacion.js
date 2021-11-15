window.addEventListener("load",function(){
 
// Header busqueda
     
let formulario = document.querySelector ("form");
let campoBuscar = document.querySelector ("[name=busqueda]");
let mensaje = document.querySelector(".alert");
     
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    if(campoBuscar.value == ""){   
        mensaje.innerText = 'Busqueda vacía';
    } else if (campoBuscar.value.length < 3){ 
        mensaje.innerText = 'Ingrese al menos 3 caracteres';
    } else {
        this.submit();
}})
     
campoBuscar.addEventListener('input', function(){
    mensaje.innerText = "";
})
     
})
