const e=document.getElementById("app");async function t(t){try{let a=document.querySelector(".pagination-controls");a&&a.remove();let l=await fetch(t),n=await l.json();console.log(n);let r=n.items?.map(e=>`<article class='card'>
                        <img class='card-images' src="${e.image}"/>
                        <div class='card-info'>
                                <h2 class='card-title'>${e.name}</h2>
                                <ul class='card-items'>
                                        <li>Ki: ${e.ki}</li>
                                        <li>MaxKi: ${e.maxKi}</li>
                                        <li>Race: ${e.race}</li>
                                        <li>Gender: ${e.gender}</li>
                                        <li>Affiliation: ${e.affiliation}</li>
                               </ul>
                        </div>
                    </article>`).join(""),s=document.createElement("section");s.classList.add("items"),s.innerHTML=r,e.appendChild(s),function(t,a){let l=document.createElement("div");l.classList.add("pagination-controls"),t.first&&i(l,"Primera",t.first),t.previous&&i(l,"Anterior",t.previous);let n=document.createElement("span");n.textContent=`P\xe1gina ${a.currentPage} de ${a.totalPages}`,n.style.margin="0 10px",l.appendChild(n),t.next&&i(l,"Siguiente",t.next),t.last&&i(l,"Última",t.last),l.style.display="flex",l.style.justifyContent="center",l.style.margin="20px 0",l.style.gap="10px",e.appendChild(l)}(n.links,n.meta)}catch(e){console.error("Error al cargar los datos:",e)}}function i(e,i,a){let l=document.createElement("button");l.textContent=i,l.addEventListener("click",()=>{document.querySelectorAll(".items").forEach(e=>e.remove()),t(a)}),l.style.padding="8px 15px",l.style.backgroundColor="#4CAF50",l.style.color="white",l.style.border="none",l.style.borderRadius="4px",l.style.cursor="pointer",e.appendChild(l)}t("https://dragonball-api.com/api/characters?page=0&limit=10");
//# sourceMappingURL=characters.43e5e70e.js.map
