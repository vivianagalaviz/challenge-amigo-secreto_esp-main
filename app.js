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
