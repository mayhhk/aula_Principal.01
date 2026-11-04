import { dados_das_noticias } from './db.js';

let valor_das_noticias = [];
const container_noticias = document.getElementById("noticias-container");
const opcao_noticias = document.getElementById("opcao_noticias");

opcao_noticia.addEventListener("click", () => {
    alternarApresemtacaoNoticias();
});

function alternarApresemtacaoNoticias() {
    if (valor_das_noticias.length === 0) {
        carregarNoticias();
        apresentarNoticias();
    } else {
        container_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregarNoticias = async () => {
    vetor_das_noticias = dados_das_noticias;
};

function apresentarNoticias() {
    vetor_das_noticias.forEach(noticia => {
        const noticiaElement = document.createElement("div");
        const cartao = document.createElement("div");
        cartao.className = "cartao";
        
        cartao.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="imagem-do-cartao">
            <section class="corpo-do-cartao">
                <h1 class="titulo-do-cartao">${noticia.titulo}</h1>
                <p class="classificacao">${noticia.descricao}
                    <span class="categoria-da-noticia">${noticia.categoria}</span>
                    <span class="data-da-noticia">${noticia.data}</span>
                </p>
                <p class="descricao-da-noticia">${noticia.descricao}</p>
                p class="autor-da-noticia"> ${noticia.autor}</p>
            </section>
            <a class="botao-do-cartao" href=".detalhes.html?id=${noticia.id}">Leia mais</a>
        `;

        container_das_noticias.appendChild(cartao); 
    });
}
