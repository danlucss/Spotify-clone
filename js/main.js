const perfilButton = document.querySelector('.perfil-button');
const hiddenContent = document.querySelector('.hidden');

perfilButton.addEventListener('click', () => {
    hiddenContent.classList.toggle('active')
})