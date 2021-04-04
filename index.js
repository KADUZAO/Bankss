let show = true

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show);
    show = !show;
})

//MUTIPLES****************************************************************************************************************************************************

const sectionCards = document.querySelector("div.container")
const card = document.querySelector("article.card")

const cards = [
    {
        perfil: "./image/BOLUDO.png",
        name: "Ruan",
        expextise: "Colaborador Puclico",
        localisetion: "Bernado saião",
    },

    {
        perfil: "./image/BOLUDO.png",
        name: "Ruan",
        expextise: "Artista",
        localisetion: "Bernado saião",
    },

    {
        perfil: "./image/BOLUDO.png",
        name: "Luan",
        expextise: "Baiano",
        localisetion: "Bernado saião",
    },

    {
        perfil: "./image/BOLUDO.png",
        name: "Luan",
        expextise: "Baiano",
        localisetion: "Bernado saião",
    },

    {
        perfil: "./image/BOLUDO.png",
        name: "Luan",
        expextise: "Baiano",
        localisetion: "Bernado saião",
    },

    {
        perfil: "./image/BOLUDO.png",
        name: "Luan",
        expextise: "Baiano",
        localisetion: "Bernado saião",
    },
]

cards.map(video => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector(".front-card img").src = video.perfil;
    cardClone.querySelector(".back-card img").src = video.perfil;
    cardClone.querySelector(".front-card .name").innerHTML = video.name;
    cardClone.querySelector(".back-card .name").innerHTML = video.name;
    cardClone.querySelector(".front-card .expertise").innerHTML = video.expextise;
    cardClone.querySelector(".back-card .expertise").innerHTML = video.expextise;
    cardClone.querySelector(".location").innerHTML = video.localisetion;
    sectionCards.appendChild(cardClone);
});

card.remove();

//BANK AND FILTER*********************************************************************************************************************************************

const textTitle = document.querySelector("section.search h1");
const textDescription = document.querySelector(".text")
const filterSelect = document.querySelector(".filter select");
const bank = document.querySelector(".container")

filterSelect.addEventListener(`click` , () => {
    textTitle.style.display = `none`;
    textDescription.style.display = `none`;
    bank.style.display = `grid`;
})