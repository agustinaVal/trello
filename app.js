//parecido al menu de hamburguesa-vlver a ver

var AgregarLista = document.getElementById("cartel");


AgregarLista.addEventListener("click", function(){

	document.getElementById("pestaña").classList.add("agregar");
	document.getElementById("botones").classList.remove("remover");
});

//aplicar siguiente funcion, para cerrar la lista.
//igual a lo anterior, mismos pasos .

var cerrarLista = document.getElementById("cerrar");

   
cerrarLista.addEventListener("click", function(){

	document.getElementById("pestaña").classList.remove("agregar");
	document.getElementById("botones").classList.add("remover");
});

//funcion para abrir mueva lita. 
/*
var nuevaLista = document.getElementById('cont')
var guardar = document.getElementById('guardar');


guardar.addEventListener("click", function(){
	
	 var list = document.getElementById('cont').value;

	//limpiar lita
document.getElementById('cartel').value = "";
*/