const rudders = document.getElementsByClassName('rudder');

for (const rudder of rudders) {
    const menuButton = rudder.getElementsByClassName('menu-button')[0];
    menuButton.addEventListener('click', () => {
        rudder.classList.toggle('collapsed');
    });
}
