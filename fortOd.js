// Массив с путями к изображениям
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

// Получаем контейнер для добавления картинок
const imageContainer = document.getElementById('imageContainer');

// Проходим по каждому элементу массива и создаем img элемент
images.forEach(src => {
    const img = document.createElement('img');  // Создаем элемент <img>
    img.src = src;                              // Устанавливаем источник изображения
    img.alt = 'Картинка';                       // Добавляем альтернативный текст
    imageContainer.appendChild(img);            // Добавляем изображение в контейнер
});
