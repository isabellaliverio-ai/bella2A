// Seleção dos elementos do HTML
const btnLike = document.getElementById('btn-like');
const contadorLikes = document.getElementById('contador-likes');

// Variável para armazenar a quantidade de likes
let quantidadeLikes = 0;

// Evento de clique no botão
btnLike.addEventListener('click', () => {
    // Incrementa o número de likes
    quantidadeLikes++;

    // Atualiza o texto exibido na tela
    contadorLikes.textContent = `${quantidadeLikes} ${quantidadeLikes === 1 ? 'like' : 'likes'}`;

    // Adiciona a classe de animação
    btnLike.classList.add('animar-pulsar');

    // Remove a classe após a animação terminar para poder repetir nos próximos cliques
    setTimeout(() => {
        btnLike.classList.remove('animar-pulsar');
    }, 400);
});
