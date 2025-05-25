import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item")
let contador = 0;


export default function criarItemDaLista() {
    let valorItem = inputItem.value;

    console.log(valorItem);

    if (valorItem === "") {
        alert("Digite um item");
        return;
    }
    const itemDaLista = document.createElement("li");
    itemDaLista.appendChild(criarContainerItemDaLista(valorItem));
    itemDaLista.appendChild(criarDataDoItem());

    inputItem.value = "";
    return itemDaLista;
}

function criarDataDoItem() {
    const itemData = document.createElement("p");
    itemData.className = "texto-data";
    itemData.innerHTML = gerarDiaDaSemana();
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