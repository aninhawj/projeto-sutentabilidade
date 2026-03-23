 // Selecionando os elementos do HTML
const botao = document.getElementById('btnMensagem');
const textoMensagem = document.getElementById('mensagemOculta');
const secaoInterativa = document.getElementById('interativo');

// Lista de dicas para o efeito legal [cite: 58, 62]
const dicas = [
    "🌱 Priorize produtos com embalagens recicláveis!",
    "🍎 Alimentos orgânicos ajudam a preservar o solo.",
    "🔌 Desligue aparelhos que não estão em uso para economizar energia.",
    "🛍️ Pratique o 'compre local' para reduzir a emissão de gases."
];

// Função que acontece ao clicar no botão
botao.addEventListener('click', function() {
    // 1. Escolhe uma dica aleatória
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    // 2. Mostra a mensagem no site
    textoMensagem.innerText = dicaAleatoria;
    textoMensagem.style.display = 'block';

    // 3. Muda a cor de fundo da seção para dar um efeito visual
    secaoInterativa.style.backgroundColor = '#d8e2dc';
    
    // 4. Alerta simples de interação
    console.log("O usuário interagiu com o site sustentável!");
});