let noticias = [];

async function alternarApresentacaoDasNoticias() {
    const container = document.getElementById("container");

    if (noticias.length == 0) {
        await buscarNoticias();
        apresentarNoticias();
    } else {
        container.innerHTML = "";
        noticias = [];
    }
}

//GET:
const buscarNoticias = async () => {
    const replit = 'https://d5dad652-419f-46c0-9925-861f90309d3c-00-1tmsqbxznmufz.picard.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + "noticias";

    await fetch(url)
        .then(response => response.json())
        .then(json => noticias = json)
        .catch(error => console.error(error))
};

function apresentarNoticias() {
    const container = document.getElementById("container");

    noticias.forEach(noticia => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
          <img src="${noticia.imagem}" alt="${noticia.titulo}" class="imagem">
          <section class="corpo-do-cartao">
            <h2 class="titulo-noticia-cartao">${noticia.titulo}</h2>
            <p>${noticia.categoria} - ${noticia.data}</p>
            <p class="descricao-noticia-cartao">${noticia.descricao}</p>
            <p class="autor-noticia-cartao">${noticia.autor}</p>
          </section>
          <a class="botao-cartao" href="detalhe.html?id=${noticia.id}">Leia mais</a>
        `;

        container.appendChild(cartao);
    });
}

function alternarVisualizacaoDoMenuLateral() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("menu-oculto");
}