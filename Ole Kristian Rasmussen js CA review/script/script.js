const singleUrl = "https://api.punkapi.com/v2/beers/1";

const singleContainer = document.querySelector(".singleresult");

async function getSingle() {
  const response = await fetch(singleUrl);
  const results = await response.json();
  console.log(results);

  singleContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    singleContainer.innerHTML +=    `<a href="details.html?id=${results[i].id}">
                                        <h2 class="h2single">${results[i].name}</h2>
                                        <div>
                                            <img class="" alt="image of ${results[i].name} beer container" src="${results[i].image_url}">
                                        </div>
                                        <div>
                                            
                                             <p>${results[i].tagline}</p>
                                        </div>
                                    </a>`;
  }
}

getSingle();

const url = "https://api.punkapi.com/v2/beers";

const resultsContainer = document.querySelector(".results");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 1; i < results.length; i++) {
      resultsContainer.innerHTML +=         `<a class="content-container" href="details.html?id=${results[i].id}">
                                                <div>
                                                    <img class="pictures" src="${results[i].image_url}">
                                                </div>
                                                <div>
                                                    <h2>${results[i].name}</h2>
                                                    <p>${results[i].tagline}</p>
                                                </div>
                                            </a>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

getProducts();
