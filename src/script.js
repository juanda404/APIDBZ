const $app = document.getElementById('app');
let API = "https://dragonball-api.com/api/characters?page=0&limit=10";

// Function to fetch data from API
async function reload(url) {
    try {
        // Limpiar solo los controles de paginación existentes (si hay)
        const existingPagination = document.querySelector('.pagination-controls');
        if (existingPagination) {
            existingPagination.remove();
        }
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const output = data.items?.map(item => {
            return `<article class='card'>
                        <img class='card-images' src="${item.image}"/>
                        <div class='card-info'>
                                <h2 class='card-title'>${item.name}</h2>
                                <ul class='card-items'>
                                        <li>Ki: ${item.ki}</li>
                                        <li>MaxKi: ${item.maxKi}</li>
                                        <li>Race: ${item.race}</li>
                                        <li>Gender: ${item.gender}</li>
                                        <li>Affiliation: ${item.affiliation}</li>
                               </ul>
                        </div>
                    </article>`;
        }).join('');

        let newItem = document.createElement('section');
        newItem.classList.add('items');
        newItem.innerHTML = output;
        $app.appendChild(newItem);
        
        // Agregar controles de paginación después de cargar los personajes
        addPaginationControls(data.links, data.meta);
        
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// Función para agregar controles de paginación
function addPaginationControls(links, meta) {
    // Crear contenedor para los controles
    const paginationControls = document.createElement('div');
    paginationControls.classList.add('pagination-controls');
    
    // Botones de navegación
    if (links.first) {
        addButton(paginationControls, 'Primera', links.first);
    }
    
    if (links.previous) {
        addButton(paginationControls, 'Anterior', links.previous);
    }
    
    // Información de página actual
    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Página ${meta.currentPage} de ${meta.totalPages}`;
    pageInfo.style.margin = '0 10px';
    paginationControls.appendChild(pageInfo);
    
    if (links.next) {
        addButton(paginationControls, 'Siguiente', links.next);
    }
    
    if (links.last) {
        addButton(paginationControls, 'Última', links.last);
    }
    
    // Aplicar algunos estilos básicos al contenedor
    paginationControls.style.display = 'flex';
    paginationControls.style.justifyContent = 'center';
    paginationControls.style.margin = '20px 0';
    paginationControls.style.gap = '10px';
    
    // Agregar controles al DOM
    $app.appendChild(paginationControls);
}

// Función para crear botones de paginación
function addButton(container, text, url) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => {
        // Limpia toda la sección de personajes antes de cargar una nueva página
        const allSections = document.querySelectorAll('.items');
        allSections.forEach(section => section.remove());
        
        // Carga la nueva página
        reload(url);
    });
    
    // Estilos básicos para el botón
    button.style.padding = '8px 15px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    
    container.appendChild(button);
}

// Iniciar carga de datos
reload(API);