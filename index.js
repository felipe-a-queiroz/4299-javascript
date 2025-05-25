import criarItemDaLista from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", adicionarItem);

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

function adicionarItem(evento) {
    evento.preventDefault();
    listaDeCompras.appendChild(criarItemDaLista());
    verificarListaVazia();
}



