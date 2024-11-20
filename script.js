
const themeToggle = document.getElementById('themeToggle');
const body = document.body;


themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
});


body.classList.add('light-mode');
