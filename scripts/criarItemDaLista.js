const inputItem = document.getElementById("input-item")
let contador = 0;


export function criarItemDaLista() {
    let valorItem = inputItem.value;

    console.log(valorItem);

    if (valorItem === "") {
        alert("Digite um item");
        return;
    }
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = criarContainerItemDaLista(valorItem);
    itemDaLista.appendChild(containerItemDaLista);

    const itemData = criarDataDoItem();
    itemDaLista.appendChild(itemData);

    inputItem.value = "";
    return itemDaLista;
}

function criarDataDoItem() {
    const itemData = document.createElement("p");
    itemData.className = "texto-data";
    const dataAtual = new Date();

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });

    const data = new Date().toLocaleDateString('pt-BR');
    const hora = dataAtual.toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    itemData.innerHTML = dataCompleta;
    return itemData;
}

function criarContainerItemDaLista(valorItem) {
    const container = document.createElement("div");
    container.className = "lista-item-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = valorItem;

    container.appendChild(checkbox);
    container.appendChild(nomeItem);

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        }
        else {
            nomeItem.style.textDecoration = "none";
        }
    });
    return container;
}