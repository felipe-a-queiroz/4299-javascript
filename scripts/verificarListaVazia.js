const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

function verificarListaVazia(listaASerVerificada) {
    const itensDaLista = listaASerVerificada.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;