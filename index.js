const imgchange = document.getElementById('changeImg');
const largecont = document.getElementById('largeImage');
function closeImage() {
    largecont.style.display = 'none';
}
function ImageClick(source) {
    imgchange.src = source;
    largecont.style.display = 'block';
}