const $app = document.getElementById('app');
const API = "https://dragonball-api.com/api/characters";

// Function to fetch data from API
async function reload(){
    const response = await fetch(API);
    const data = await response.json();
    console.log(data.items[0].name);

   const output = data.items?.map(item =>{
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
   });


   let newItem = document.createElement('section');
   newItem.classList.add('items');
   newItem.innerHTML = output;
   $app.appendChild(newItem);
    


}

reload();