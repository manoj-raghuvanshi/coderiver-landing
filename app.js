// Add this script to toggle the mobile menu
const nav = document.querySelector('nav ul');
const toggleButton = document.createElement('div');
toggleButton.classList.add('mobile-menu-toggle');
toggleButton.innerHTML = '☰';
document.querySelector('header .container').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});