const inputItem = document.getElementById("input-item")
const lista = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", adicionarItem);

let contador = 0;

function adicionarItem(evento) {
    evento.preventDefault();
    let valorItem = inputItem.value;

    console.log(valorItem);

    if (valorItem === "") {
        alert("Digite um item");
        return;
    }
    const li = document.createElement("li");
    const container = criarContainer(valorItem);
    li.appendChild(container);

    const textoDeDataDoItem = criarDataDoItem();
    li.appendChild(textoDeDataDoItem);

    lista.appendChild(li);
    inputItem.value = "";
}

function criarDataDoItem() {
    const textoDeDataDoItem = document.createElement("p");
    textoDeDataDoItem.className = "texto-data";
    const dataAtual = new Date();

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });

    const data = new Date().toLocaleDateString('pt-BR');
    const hora = dataAtual.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    textoDeDataDoItem.innerHTML = dataCompleta;
    return textoDeDataDoItem;
}

function criarContainer(valorItem) {
    const container = document.createElement("div");
    container.className = "lista-item-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-" + contador++;

    const novoItem = document.createElement("p");
    novoItem.innerHTML = valorItem;

    container.appendChild(checkbox);
    container.appendChild(novoItem);
    return container;
}

