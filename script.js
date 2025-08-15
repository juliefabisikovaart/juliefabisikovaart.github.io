// script.js
function switchLanguage(lang) {
    const csElements = document.querySelectorAll('.cs');
    const enElements = document.querySelectorAll('.en');

    if (lang === 'cs') {
        csElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
    } else if (lang === 'en') {
        csElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
    }
}

// Nastavit výchozí jazyk při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('cs'); // defaultně česky
});

function showModal(imageSrc, captionText) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('largeImage');
    var caption = document.getElementById('imageCaption');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    caption.textContent = captionText;
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';

}
