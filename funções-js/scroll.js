const sections = document.querySelectorAll('.section');

function scrollToSection(direction, sensitivity) {
  const currentSection = Array.from(sections).findIndex(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
  });

  if (currentSection !== -1) {
    let targetSection;

    if (direction === 'up' && currentSection > 0) {
      targetSection = currentSection - 1;
    } else if (direction === 'down' && currentSection < sections.length - 1) {
      targetSection = currentSection + 1;
    }

    if (targetSection !== undefined) {
      sections[targetSection].scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Adiciona um ouvinte de evento de roda (wheel)
document.addEventListener('wheel', (event) => {
  const direction = event.deltaY > 1 ? 'down' : 'up';

  // Ajusta a sensibilidade do scroll (aumenta a sensibilidade)
  const sensitivity = 0.1; // Ajuste o valor conforme necessário

  // Multiplica o valor da direção pelo fator de sensibilidade
  scrollToSection(direction, sensitivity);
});
