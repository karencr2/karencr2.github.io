// Carregar a biblioteca Lottie Player
const script = document.createElement('script');
script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest";
document.head.appendChild(script);

// Função para criar borboletas
function createButterflies(count) {
  const occupiedPositions = []; // Array para armazenar posições ocupadas
  const padding = 320; // Tamanho da borboleta

  for (let i = 1; i <= count; i++) {
    const butterfly = document.createElement('lottie-player');
    butterfly.className = 'butterfly butterfly-' + i;
    butterfly.src = 'https://lottie.host/b223e986-25ef-42f6-8b88-5b554bcfa0c5/ytRmrmnfug.json'; // Novo URL da animação
    butterfly.background = 'transparent';
    butterfly.speed = '1';
    butterfly.loop = true;
    butterfly.autoplay = true;

    // Define o tamanho da borboleta
    butterfly.style.width = '320px';  // Aumenta a largura
    butterfly.style.height = '320px'; // Aumenta a altura
    butterfly.style.position = 'absolute'; // Define a posição como absoluta

    // Gera uma nova posição aleatória
    const newPosition = randomPosition();
    occupiedPositions.push(newPosition); // Armazena a nova posição
    butterfly.style.left = `${newPosition.x}px`;
    butterfly.style.top = `${newPosition.y}px`;

    document.body.appendChild(butterfly);
    moveButterfly(butterfly); // Mover cada borboleta
  }
}

// Função para mover as borboletas
function moveButterfly(butterfly) {
  const newPosition = randomPosition();
  butterfly.style.left = `${newPosition.x}px`;  // Usando crases para interpolação
  butterfly.style.top = `${newPosition.y}px`;   // Usando crases para interpolação

  // Muda a posição a cada 5 segundos
  setTimeout(() => moveButterfly(butterfly), 5000);
}

// Função para gerar posições aleatórias
function randomPosition() {
  return {
    x: Math.random() * (window.innerWidth - 320),  // Ajuste para o novo tamanho
    y: Math.random() * (window.innerHeight - 320)  // Ajuste para o novo tamanho
  };
}

// Iniciar a criação de 8 borboletas
createButterflies(8);
