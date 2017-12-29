
//guadar en variable mi conteneder principal
var cont = document.getElementById('caja');
// guardar en variable botones
var btn = document.getElementById("btn");
//guardar en varianle la lista
var list = document.getElementById('list');
//guardar en variable vacia elementos que ire guardando
var add = "";
var nuevoCont = "";


list.addEventListener("click", function(){	
	cont.classList.add('vista');	
	btn.classList.remove('esconder');
});

//guardo en variable cerrar ventana y la llamo
var cerrar = document.getElementById('cerrar');
//funcion al hacer click boton 
cerrar.addEventListener("click", function(){
	
	//remuevo la clase vista
	cont.classList.remove("vista");
	//agrego la clase ya creada esconder
	btn.classList.add("esconder");

	 //limpio mi lista
	document.getElementById('list').value = "";
});


//llamo al  div vacio que me reciba la lista
var agregarNlist = document.getElementById('agregarNlist')
var guardar = document.getElementById('guardar');


//crear la variable afuera vacia para llamarla en una nueva funcion
guardar.addEventListener("click", function(){
	//llamo a mi input
	 var list = document.getElementById('list').value;
	 //limpiar lista
	 document.getElementById('list').value = "";

	
	
	 //creando un div contenedor nuevo donde almacenara lista
	 var nuevoCont = document.createElement('div');
	 //creando un p nuevo donde guardar la lista
	var divLista = document.createElement('p');
	
	//creando un nodo con el texto nuevo de mi lista
	var texto = document.createTextNode(list);


	//creando un enlace para crear muchas listas
	var add = document.createElement('a');	
	//creo tambien su boton respactivo
	var botonAñadirNuevo = document.createTextNode('Añadir...');


	//empezar a añadir y enlazar padres con hijos
	divLista.appendChild(texto);	
	add.appendChild( botonAñadirNuevo);


	//añado nuevo contenido a su padre p
	nuevoCont.appendChild(divLista);
	nuevoCont.appendChild(add);

	//darle estilo al contenedor
	nuevoCont.classList.add('diseño', 'vista');

	//añado el  div creado al div  de HTML
	agregarNlist.appendChild(nuevoCont);

	
	add.addEventListener('click', function(){
	
		//creando el text area para poder escribir lista nueva
		var nuevoTexto = document.createElement('textarea');
		nuevoTexto.setAttribute('class', 'escribir');

		//añadir un boton
		var botonNuevo = document.createElement('button');
		var añadirTexto = document.createTextNode('Agregar');
        
        //enlazando padres e hijos
		nuevoCont.appendChild(nuevoTexto);
		botonNuevo.appendChild(añadirTexto);
		nuevoCont.appendChild(botonNuevo);

		

		//sin esta funcion creada no funciona boton de añadir en las listas que se van escribiendo
		botonNuevo.addEventListener('click', function(){
			//introducir texto 
			var guardarNuevoTexto = nuevoTexto.value;
			//limpiar 
			nuevoTexto.value = "";
			//crear elemento p
			var contNuevoText = document.createElement('p');
			contNuevoText.setAttribute('class','escrituraFondo');
			//crear nodo 
			var nuevoContenedorTexto = document.createTextNode(guardarNuevoTexto);
			//enlazar
			contNuevoText.appendChild(nuevoContenedorTexto);			
			nuevoCont.insertBefore(contNuevoText, nuevoTexto);

		})

	})


		
});