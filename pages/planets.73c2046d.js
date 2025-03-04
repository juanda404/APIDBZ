const a=document.getElementById("app");!async function(){try{let t=await fetch("https://dragonball-api.com/api/planets"),e=await t.json();console.log(e);let n=e.items?.map(a=>`
            <article class="container-card">
                <img class="container-img"src="${a.image}"/>
                <article class="container-information">
                     <h2>${a.name}</h2>
                     <p>Description: ${a.description}</p>
                </article>
            </article>`).join(""),c=document.createElement("section");c.classList.add("planets"),c.innerHTML=n,a.appendChild(c)}catch(a){console.error("Error al cargar los datos:",a)}}();
//# sourceMappingURL=planets.73c2046d.js.map
