
const toggleBtn = document.querySelector('.navbar__toggleBtn');

const menu = document.querySelector('.navbar__menuItems');

const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {

    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

