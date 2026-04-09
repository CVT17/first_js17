
const resizeBox = document.getElementById('resize-box');
resizeBox.addEventListener('click', () => {
const currentWidth = resizeBox.offsetWidth;
const currentHeight = resizeBox.offsetHeight;
resizeBox.style.width = (currentWidth + 15) + 'px';
resizeBox.style.height = (currentHeight + 15) + 'px';
});

const dataBox = document.getElementById('data-box');
function logContent() {
const content = dataBox.textContent;
console.log("Данные:", content);
}dataBox.addEventListener('dblclick', logContent);


const imageElement = document.getElementById('swap-image');
const img1 = "image/7. Бабочка.jpg";
const img2 = "image/14. Листва.jpg";
imageElement.addEventListener('click', function() {
    if (imageElement.src === img1) {
        imageElement.src = img2;
    } else {
        imageElement.src = img1;
    }
});