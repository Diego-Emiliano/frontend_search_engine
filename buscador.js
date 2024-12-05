/**

	Copyright (c) 2024 Diego-Emiliano

	This file is part of frontend_search_engine (https://github.com/Diego-Emiliano/frontend_search_engine),
	which is licensed under the MIT License. (see LICENSE.txt or https://github.com/Diego-Emiliano/frontend_search_engine/blob/main/LICENSE.txt)
     
**/

const data = [
  { fecha: "1", nombre: "Uno", url: "/uno" },
  { fecha: "2", nombre: "Dos", url: "/dos" },
  { fecha: "3", nombre: "Tres", url: "/tres" },
  { fecha: "4", nombre: "Cuatro", url: "/cuatro" },
  { fecha: "5", nombre: "Cinco", url: "/cinco" },
  { fecha: "6", nombre: "Seis", url: "/seis" },
  { fecha: "7", nombre: "Siete", url: "/siete" },
  { fecha: "8", nombre: "Ocho", url: "/ocho" },
  { fecha: "9", nombre: "Nueve", url: "/nueve" },
  { fecha: "10", nombre: "Diez", url: "/diez" },
  { fecha: "11", nombre: "Once", url: "/once" },
  { fecha: "12", nombre: "Doce", url: "/doce" },
  { fecha: "13", nombre: "Trece", url: "/trece" },
  { fecha: "14", nombre: "Catorce", url: "/catorce" },
  { fecha: "15", nombre: "Quince", url: "/quince" },
  { fecha: "16", nombre: "Diciseis", url: "/diciseis" },
  { fecha: "17", nombre: "Diecisiete", url: "/dieciocho" },
  { fecha: "18", nombre: "Dieciocho", url: "/diecisiete" },
  { fecha: "19", nombre: "Diecinueve", url: "/diecinueve" },
  { fecha: "20", nombre: "Veinte", url: "/veinte" },
  { fecha: "21", nombre: "Veintiuno", url: "/veintiuno" },
  { fecha: "22", nombre: "Veintidos", url: "/veintidos" },
  { fecha: "23", nombre: "Veintitres", url: "/veintitres" },
  { fecha: "24", nombre: "Veinticuatro", url: "/veinticuatro" }
];

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const mensaje = document.getElementById("searchInput");

boton1.addEventListener("click", function (ev) {
    ev.preventDefault(); // Evitar el envío del formulario
});

boton2.addEventListener("click", function (ev) {
    ev.preventDefault(); // Evitar el envío del formulario
});

mensaje.addEventListener("click", function (ev) {
    ev.preventDefault(); // Evitar el envío del formulario
});

const resultado = 4;

var dato1 = 0;
var dato2 = resultado

const input = document.getElementById("searchInput");
const resultContainer = document.getElementById("resultContainer");

function search() {
    const filter = input.value.toUpperCase();
    dato2 = resultado;
    dato1 = 0;

    // Limpiar resultados previos
    resultContainer.innerHTML = "";

    // Si no hay texto en el campo de búsqueda, no mostrar nada
    if (!filter) {
	// Resetear los botones
	boton2.setAttribute("disabled", "");
	boton1.setAttribute("disabled", "");
        return; // Salir de la función si el campo está vacío
    }

    // Filtrar los datos
    const filteredData = data.filter(item => {
        return item.fecha.toUpperCase().includes(filter) || 
               item.nombre.toUpperCase().includes(filter);
    });

    // Botones
    
    if(dato2 >= filteredData.length){
		boton2.setAttribute("disabled", "")
	}
	
	if(!(dato2 >= filteredData.length)){
		boton2.removeAttribute("disabled")
    }


    // Limitar a un máximo de 4 resultados
    const resultsToShow = filteredData.slice(dato1, dato2);

    // Mostrar resultados
    resultsToShow.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        // Crear un enlace
        const link = document.createElement("a");
        link.href = item.url; // URL del enlace
        link.textContent = `${item.nombre} ${item.fecha}`; // Texto del enlace
        link.target = "_blank"; // Abrir en nueva pestaña

        div.appendChild(link); // Añadir el enlace al div
        resultContainer.appendChild(div); // Añadir el div al contenedor de resultados
    });

    // Mensaje si no hay resultados
    if (resultsToShow.length === 0) {
        resultContainer.innerHTML = "<div class='result-item'>No se encontraron resultados.</div>";
    }
}

//Boton siguiente

function siguiente() {
    const filter = input.value.toUpperCase();

    // Limpiar resultados previos
    resultContainer.innerHTML = "";

    // Filtrar los datos
    const filteredData = data.filter(item => {
        return item.fecha.toUpperCase().includes(filter) || 
               item.nombre.toUpperCase().includes(filter);
    });

    // Botones

    dato1+=resultado;
    dato2+=resultado;
    
    if(dato2 >= filteredData.length){
		boton2.setAttribute("disabled", "")
	}
	
	if(!(dato1 === 0)){
		boton1.removeAttribute("disabled")
    }

    // Limitar a un máximo de 4 resultados
    const resultsToShow = filteredData.slice(dato1, dato2);

    // Mostrar resultados
    resultsToShow.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        // Crear un enlace
        const link = document.createElement("a");
        link.href = item.url; // URL del enlace
        link.textContent = `${item.nombre} ${item.fecha}`; // Texto del enlace
        link.target = "_blank"; // Abrir en nueva pestaña

        div.appendChild(link); // Añadir el enlace al div
        resultContainer.appendChild(div); // Añadir el div al contenedor de resultados
    });
}

//Boton anterior

function anterior() {
    const filter = input.value.toUpperCase();

    // Limpiar resultados previos
    resultContainer.innerHTML = "";

    // Filtrar los datos
    const filteredData = data.filter(item => {
        return item.fecha.toUpperCase().includes(filter) || 
               item.nombre.toUpperCase().includes(filter);
    });
    
    // Botones

	dato1-=resultado;
	dato2-=resultado;
    
    if(dato1 === 0){
		boton1.setAttribute("disabled", "");
	}
	
	if(!(dato2 >= filteredData.length)){
		boton2.removeAttribute("disabled")
    }

    // Limitar a un máximo de resultados
    const resultsToShow = filteredData.slice(dato1, dato2);

    // Mostrar resultados
    resultsToShow.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        // Crear un enlace
        const link = document.createElement("a");
        link.href = item.url; // URL del enlace
        link.textContent = `${item.nombre} ${item.fecha}`; // Texto del enlace
        link.target = "_blank"; // Abrir en nueva pestaña

        div.appendChild(link); // Añadir el enlace al div
        resultContainer.appendChild(div); // Añadir el div al contenedor de resultados
    });
}
