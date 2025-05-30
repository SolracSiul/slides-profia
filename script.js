// Pegamos todas as imagens do carrossel
const imagens = document.querySelectorAll('.carousel img');

// Pegamos os botões de "anterior" e "próximo"
const botaoAnterior = document.querySelector('.prev');
const botaoProximo = document.querySelector('.next');

// Começamos mostrando a primeira imagem (índice 0)
let imagemAtual = 0;

// Função que mostra a imagem que queremos
function mostrarImagem(indice) {
    imagens.forEach(function(imagem, i) {
        if (i === indice) {
            imagem.classList.add('active');
        } else {
            imagem.classList.remove('active');
        }
    });
}

// Quando clicar no botão "anterior"
botaoAnterior.addEventListener('click', function() {
    // Voltamos uma imagem
    imagemAtual = imagemAtual - 1;

    // Se passar do começo, volta para a última
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    // Mostramos a nova imagem
    mostrarImagem(imagemAtual);
});

// Quando clicar no botão "próximo"
botaoProximo.addEventListener('click', function() {
    // Avançamos uma imagem
    imagemAtual = imagemAtual + 1;

    // Se passar do final, volta para a primeira
    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    // Mostramos a nova imagem
    mostrarImagem(imagemAtual);
});
