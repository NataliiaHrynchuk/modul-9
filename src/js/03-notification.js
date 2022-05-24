

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;//інтервал затримки
let timeoutId = null;//глобальна змінна з початковим значенням "ніщо"

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification(); //кнопка видима одразу при завантаженні сторінки

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);//відмінили запланований виклик після виконання
}//ф-ція прибирання класу is-visible (тобто робимо кнопку невидимою)
//при кліку на неї

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}// ф-ція встановлення класу is-visible (видима) на кнопку оповіщення,
//timeoutId отримує значення id, яке ф-ції setTimeout присвоїв браузер
//під час її виклику
//викликом ф-ції hideNotification через інтервал NOTIFICATION_DELAY
//ми прибираємо клас is-visible з кнопки, щоб вона стала невидимою,
//якщо на неї не натисне користувач

function hideNotification() {
  refs.notification.classList.remove('is-visible');
} //ф-ція зняття класу is-visible з кнопки оповіщення