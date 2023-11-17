const dropdowns = document.getElementsByClassName('dropdown');

for (const dropdown of dropdowns) {
    const dropdownButton =
        dropdown.getElementsByClassName('dropdown-button')[0];
    const dropdownItems = dropdown.getElementsByClassName('dropdown-items')[0];

    dropdownButton.addEventListener('click', () => {
        dropdownItems.classList.toggle('hidden');
    });
}
