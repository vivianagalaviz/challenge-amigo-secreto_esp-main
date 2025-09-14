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
    inputAmigo.value = ""; // limpiar el campo después de agregar
}