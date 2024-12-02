/**

	Copyright (c) 2024 Diego-Emiliano

	This file is part of frontend_search_engine (https://github.com/Diego-Emiliano/frontend_search_engine),
	which is licensed under the MIT License. (see LICENSE.txt or https://github.com/Diego-Emiliano/frontend_search_engine/blob/main/LICENSE.txt)
     
**/

const data = [
    { fecha: "1", nombre: "Alpha", url: "/" },
    { fecha: "2", nombre: "Beta", url: "/" },
    { fecha: "3", nombre: "Omega", url: "/" },
    { fecha: "4", nombre: "Gamma", url: "/" },
    { fecha: "5", nombre: "Delta", url: "/" }
];

function search() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const resultContainer = document.getElementById("resultContainer");

    // Limpiar resultados previos
    resultContainer.innerHTML = "";

    // Si no hay texto en el campo de búsqueda, no mostrar nada
    if (!filter) {
        return; // Salir de la función si el campo está vacío
    }

    // Filtrar los datos
    const filteredData = data.filter(item => {
        return item.fecha.toUpperCase().includes(filter) || 
               item.nombre.toUpperCase().includes(filter);
    });

    // Limitar a un máximo de 4 resultados
    const resultsToShow = filteredData.slice(0, 4);

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
