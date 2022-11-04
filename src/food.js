import "./styles.css"

const baseURL = 'https://api.sampleapis.com/recipes/recipes';

const app = document.getElementById('app');

fetch(baseURL)
    .then((response) => response.json())
    .then((data) => data.forEach(function (atributoAPI) {
            console.log('atributoAPI', atributoAPI.title)
            app.innerHTML += `
                <div id="cardfood" class="card card-margin" style="width: 18rem;">
                    <img src="${atributoAPI.photoUrl}" class="card-img-top" alt="no hay imagen">
                    <div class="card-body">
                        <h5 class="card-title">${atributoAPI.title}</h5>
                        <p class="card-text"><b>Origen del platillo</b> <br> ${atributoAPI.cuisine}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Tiempo estimado de cocción ${atributoAPI.totalTime}</li>
                        <li class="list-group-item">Proteinas ${atributoAPI.protein}</li>
                        <li class="list-group-item">Carbohidratos ${atributoAPI.carbohydrate}</li>
                    </ul>
                </div>
            `
        }));

