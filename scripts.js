document.addEventListener('DOMContentLoaded', () => {
    const languageOptions = document.querySelectorAll('.language-option');
    const selectedLanguage = document.getElementById('selected-language');
    const submenu = document.querySelector('.submenu');

    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
        selectedLanguage.textContent = e.target.textContent;
        submenu.style.display = 'none';
      });
    });

    
    selectedLanguage.addEventListener('click', () => {
        submenu.style.display = 'block';
    });
});