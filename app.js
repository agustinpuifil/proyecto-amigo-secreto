// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

// Agrega un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que el nombre contenga solo letras y espacios
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert("Nombre no válido. Solo se permiten letras.");
        input.value = '';
        return;
    }

    // Validar que el nombre no esté repetido
    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        input.value = '';
        return;
    }

    listaDeAmigos.push(nombre);
    mostrarListaAmigos();
    input.value = '';
}

// Muestra la lista actual en pantalla
function mostrarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

// Sortea un nombre y lo elimina de la lista
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = '🎉 Ya no quedan más nombres para sortear.';
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // Eliminar el nombre sorteado de la lista
    listaDeAmigos.splice(indiceAleatorio, 1);

    // Mostrar resultado
    const li = document.createElement('li');
    li.innerHTML = `🎁 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
    resultado.appendChild(li);

    // Actualizar la lista visual
    mostrarListaAmigos();
}

// Reinicia el juego
function reiniciarJuego() {
    listaDeAmigos = [];

    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';

    alert('Juego reiniciado. Puedes comenzar de nuevo.');
}