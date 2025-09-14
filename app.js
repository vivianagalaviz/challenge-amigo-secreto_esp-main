// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
    //console.log(amigo); 

    if(amigo === ""){
        alert("Nombre inválido, ingresa otro por favor.");
        return;
    }

    amigos.push(amigo);
    //console.log(amigos);
}