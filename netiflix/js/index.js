document.addEventListener('DOMContentLoaded', () => {
  const profileLinks = document.querySelectorAll('.container .profile a');

  profileLinks.forEach(link => {
    link.addEventListener('click', event => {
      const profileItem = link.closest('.profile');
      if (!profileItem) return;

      const nameElement = profileItem.querySelector('p');
      const imageElement = profileItem.querySelector('img');

      if (nameElement && imageElement) {
        localStorage.setItem('perfilAtivoNome', nameElement.textContent.trim());
        localStorage.setItem('perfilAtivoImagem', imageElement.src);
      }
    });
  });
});
