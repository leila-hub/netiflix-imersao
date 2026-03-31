const themeToggle = document.getElementById('theme-toggle');
const lightModeClass = 'light-mode';
const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add(lightModeClass);
    themeToggle.textContent = '🌞';
    themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
  } else {
    document.body.classList.remove(lightModeClass);
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Ativar modo claro');
  }
  localStorage.setItem('theme', theme);
}

function initializeTheme() {
  if (savedTheme === 'light') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.contains(lightModeClass);
  setTheme(isLight ? 'dark' : 'light');
});

initializeTheme();
