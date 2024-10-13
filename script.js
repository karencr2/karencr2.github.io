// Carregar a biblioteca Lottie Player
const script = document.createElement('script');
script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest";
document.head.appendChild(script);

// Defina a área de exclusão (exemplo: um contêiner na parte superior e a caixa de descrições)
const exclusionArea = {
  x: 100, // Posição x do contêiner
  y: 100, // Posição y do contêiner
  width: 600, // Largura do contêiner
  height: 300 // Altura do contêiner
};

// Exemplo de dimensões da caixa de descrição (ajuste conforme necessário)
const descriptionBox = {
  x: 50, // Posição x da caixa de descrição
  y: 500, // Posição y da caixa de descrição
  width: 700, // Largura da caixa de descrição
  height: 150 // Altura da caixa de descrição
};

// Função para criar borboletas
function createButterflies(count) {
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
  let position;
  do {
    position = {
      x: Math.random() * (window.innerWidth - 320),  // Ajuste para o novo tamanho
      y: Math.random() * (window.innerHeight - 320)  // Ajuste para o novo tamanho
    };
  } while (
    // Verifica se a nova posição está dentro da área de exclusão
    (position.x < exclusionArea.x + exclusionArea.width &&
      position.x + 320 > exclusionArea.x &&
      position.y < exclusionArea.y + exclusionArea.height &&
      position.y + 320 > exclusionArea.y) ||
    (position.x < descriptionBox.x + descriptionBox.width &&
      position.x + 320 > descriptionBox.x &&
      position.y < descriptionBox.y + descriptionBox.height &&
      position.y + 320 > descriptionBox.y) // Verifica sobreposição com a caixa de descrição
  );

  return position;
}

// Iniciar a criação de 8 borboletas
createButterflies(8);
