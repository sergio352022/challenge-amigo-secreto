/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
 Aqui você deverá desenvolver a lógica para resolver o problema.*/

let amigoSecreto = [""];        
let nomesSorteados = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();

if(nomeAmigo === "") {
    alert("Por favor, insira um nome válido.");
    return;
} 

amigoSecreto.push(nomeAmigo);
atualizarLista();
amigoInput.value = "";

}

// aqui atualiza a lista de amigos exibida
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let amigo of amigoSecreto) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    }
}

// aqui a função para sorteio de um dos amigos secretos
function sortearAmigo() {
    if(amigoSecreto.length === 0) {
        alert("A lista de nomes está vazia. Adicione um nome.");
        return;
    }

    if(nomesSorteados.length === amigoSecreto.length) {
        alert("Todos os nomes já foram sorteados.");
        setTimeout(reiniciarJogo, 2000);                 // adiciona um atraso de 2 segundos antes de reiniciar o jogo
        return;
    }

    let indiceAleatório;
    let amigoSorteado;

    do {
        indiceAleatório = Math.floor(Math.random() * amigoSecreto.length);
        amigoSorteado = amigoSecreto[indiceAleatório];
    } while (nomesSorteados.includes(amigoSorteado));

    nomesSorteados.push(amigoSorteado);

    document.getElementById("resultado").innerHTML = `<li> Amigo Secreto: ${amigoSorteado} </li>`;

 }

 function reiniciarJogo() {
    amigoSecreto = [];                                                      // Limpa a lista de amigos
    nomesSorteados = [];                                                    // Limpa a lista de nomes sorteados
    document.getElementById("resultado").innerHTML = "";                    // Limpa o resultado exibido
    atualizarLista();                                                       // Atualiza a lista na interface 
}

    const indiceAleatório = Math.floor(Math.random() * amigoSecreto.length);
    const amigoSorteado = amigoSecreto[indiceAleatório];

    document.getElementById("resultado").innerHTML = `<li> Amigo Secreto: ${amigoSorteado} </li>`;

    document.addEventListener("DOMContentLoaded",atualizarLista);        // Aqui vamos atualizar a lista inicial ao carregar a página




