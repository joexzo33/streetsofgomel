const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({x, y}) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  	
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
    })
	})
}, false);

document.addEventListener("DOMContentLoaded", function() {
   // Получаем все элементы карточек
   const cards = document.querySelectorAll(".card__img");

   // Обработчики кликов для всех карточек
   cards.forEach(card => {
       card.addEventListener("click", function() {
           const cardId = this.id; 
           openStreetCard(cardId);
       });
   });
});

function openStreetCard(cardId) {
   // Открытие разных страниц в зависимости от района
   if (cardId === "central") {
       openModalWithIframe("../streetscarts/streetcards.html"); // Путь к странице Центрального района
   } else if (cardId === "soviet") {
       openModalWithIframe("../streetscartssoviet/streetcardssoviet.html"); // Путь к странице Советского района
   } else if (cardId === "railway") {
       openModalWithIframe("../streetscartszhelezo/streetcardszhelezo.html"); // Путь к странице Железнодорожного района
   } else if (cardId === "novobel") {
       openModalWithIframe("../streetscartsbelica/streetcardsbelica.html"); // Путь к странице Новобелицкого района
   }
}



document.getElementById('centralCard').addEventListener('click', function() {
  // Загружаем содержимое streetcards.html в модальное окно
  fetch('../streetscarts/streetcards.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('modal-body').innerHTML = data;
          document.getElementById('modal').style.display = 'block';
      })
      .catch(error => console.error('Ошибка при загрузке:', error));
});

document.getElementById('sovietCard').addEventListener('click', function() {
   // Загружаем содержимое streetcards.html в модальное окно
   fetch('../streetscartssoviet/streetcardssoviet.html')
       .then(response => response.text())
       .then(data => {
           document.getElementById('modal-body').innerHTML = data;
           document.getElementById('modal').style.display = 'block';
       })
       .catch(error => console.error('Ошибка при загрузке:', error));
 });

 document.getElementById('railwayCard').addEventListener('click', function() {
   // Загружаем содержимое streetcards.html в модальное окно
   fetch('../streetscartszhelezo/streetcardszhelezo.html')
       .then(response => response.text())
       .then(data => {
           document.getElementById('modal-body').innerHTML = data;
           document.getElementById('modal').style.display = 'block';
       })
       .catch(error => console.error('Ошибка при загрузке:', error));
 });

 document.getElementById('novobelCard').addEventListener('click', function() {
   // Загружаем содержимое streetcards.html в модальное окно
   fetch('../streetscartsbelica/streetcardsbelica.html')
       .then(response => response.text())
       .then(data => {
           document.getElementById('modal-body').innerHTML = data;
           document.getElementById('modal').style.display = 'block';
       })
       .catch(error => console.error('Ошибка при загрузке:', error));
 });

// Закрытие модального окна
document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

// Закрытие модального окна при нажатии вне его
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
});

