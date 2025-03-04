const $app = document.getElementById('app');
let API = "https://dragonball-api.com/api/planets";
async function loadplanets() {
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        const output = data.items?.map((item)=>{
            return `
            <article class="container-card">
                <img class="container-img"src="${item.image}"/>
                <article class="container-information">
                     <h2>${item.name}</h2>
                     <p>Description: ${item.description}</p>
                </article>
            </article>`;
        }).join('');
        let newPlanet = document.createElement('section');
        newPlanet.classList.add('planets');
        newPlanet.innerHTML = output;
        $app.appendChild(newPlanet);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
loadplanets();

//# sourceMappingURL=planets.90864bf0.js.map
