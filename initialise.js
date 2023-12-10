
let url = './data/directory.json';
let data;


function linkTo(url){
    console.log(url);
    window.open(url, "_blank");
}


function createPreview(url, image, title, date, snippet){
    return `<div onclick="linkTo('${url}')" class="preview">

                <img src="${image}">
                <div class="preview_text">
                    <h4 style="display: inline; vertical-align: middle">${title}</h4> | <span class="date">${date}</span>
                    <br>
                    <p>
                        ${snippet.join(" ")}
                    </p>
                </div>
            </div>`;
}

function populateLatest(data){

    // Add articles
    let latest_div = document.getElementById("latest_previews")

    // populate page
    let ids = data["articles"]["ids"];



    for (let i=0; i<data["latest"].length; i++){

        let preview = data["latest"][i];
        let type = preview["type"];
        let id = preview["id"];

        // article
        let article = data[type][id];

        let div_string = createPreview(article["url"],
            article["thumbnail"],
            article["title"],
            article["date"],
            article["snippet"]);

        latest_div.innerHTML += div_string;

    }

}


function populateArticles(data){

    // Add articles
    let article_div = document.getElementById("articles")

    // populate page
    let ids = data["articles"]["ids"];


    for (let id in ids){

        // article
        let article = data["articles"][id];

        let div_string = createPreview(article["url"],
            article["thumbnail"],
            article["title"],
            article["date"],
            article["snippet"]);

        article_div.innerHTML += div_string;

    }

}



async function getData(){
    await fetch(url).then(response => {
        return response.json();
    }).then(json_data => {
        // set value
        data = json_data["data"];

        populateLatest(data);
        populateArticles(data);

    }).catch(error => {
        console.log("error", error);
    });
}

// MAIN -------------------------- //

getData();


