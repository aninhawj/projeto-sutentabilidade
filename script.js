document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
  
    // Verifica se a seção está visível na tela
    function isSectionInView(section) {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Adiciona a classe 'visible' quando a seção entra na tela
    function checkVisibility() {
      sections.forEach(section => {
        if (isSectionInView(section)) {
          section.classList.add('visible');
        }
      });
    }
  
    // Função de scroll para adicionar a classe 'visible' à medida que as seções aparecem
    window.addEventListener('scroll', checkVisibility);
  
    // Verifica as seções assim que a página carrega
    checkVisibility();
  });
  
  // Estilo adicional para a classe 'visible' que será aplicada quando a seção estiver visível
  const style = document.createElement('style');
  style.innerHTML = `
    section.visible {
      transform: translateY(0);
      opacity: 1;
      transition: all 0.5s ease-out;
    }
    section {
      transform: translateY(50px);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);