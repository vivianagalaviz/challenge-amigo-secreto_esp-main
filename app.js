//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim();
    console.log(amigo);

    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(amigo);
    console.log(amigos);
    inputAmigo.value = "";
    actualizarLista();
}

//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // limpia la lista antes de actualizar
    lista.innerHTML = "";

    // recorre el array y agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en tu lista:(.");
        return;
    }
    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre en esa posición
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

     // 🔹 Vaciar la lista de amigos
    amigos = [];

    // 🔹 Limpiar la lista en pantalla
    actualizarLista();
}

