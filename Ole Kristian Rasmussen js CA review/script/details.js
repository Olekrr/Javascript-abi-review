const detailContainer = document.querySelector(".content-container");

const title = document.querySelector("title")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id")

console.log(id)

const url = "https://api.punkapi.com/v2/beers/" + id 

console.log(url);

async function fetchBeer() {

    try{
        const response = await fetch(url);
        const results = await response.json();

        for(let i = 0; i < results.length; i++){
            title.innerHTML = `${results[i].name}`
            detailContainer.innerHTML = `<div>
                                            <img class="" alt="image of ${results[i].name} beer container" src="${results[i].image_url}">
                                            <h1>${results[i].name}</h1>
                                            <p>${results[i].description}</p>
                                        </div>`
        }
        console.log(results);
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchBeer();