const inputItem = document.getElementById("input-item")

const botaoAdicionar = document.getElementById("adicionar-item");
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    let valorItem = inputItem.value;
    if (valorItem === "") {
        alert("Digite um item");
        return;
    }
    const lista = document.getElementById("lista-de-compras");
    const li = document.createElement("li");
    const container = document.createElement("div");
    container.className = "lista-item-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-" + (document.querySelectorAll("#lista-de-compras li").length + 1);

    const novoItem = document.createElement("p");
    novoItem.innerHTML = valorItem;

    container.appendChild(checkbox);
    container.appendChild(novoItem);
    li.appendChild(container);

    const textoDeDataDoItem = document.createElement("p");
    textoDeDataDoItem.className = "texto-data";
    const dataAtual = new Date();
    const opcoesDiaDaSemana = { weekday: 'long' };
    const opcoesData = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const opcoesHora = { hour: '2-digit', minute: '2-digit' };

    const diaDaSemana = dataAtual.toLocaleDateString('pt-BR', opcoesDiaDaSemana);
    const diaDaSemanaFormatado = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);

    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesData);
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', opcoesHora);

    textoDeDataDoItem.innerHTML = `${diaDaSemanaFormatado} (${dataFormatada}) às ${horaFormatada}`;
    li.appendChild(textoDeDataDoItem);

    lista.appendChild(li);
    inputItem.value = "";

});
