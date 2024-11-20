// Seleciona o checkbox e o corpo da página
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Adiciona evento para alternar entre os temas
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
});

// Define o tema inicial como claro
body.classList.add('light-mode');
