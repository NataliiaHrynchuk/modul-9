
import '../css/common.css';

/**
 * ====Приклад без використання Бутстрапу===
 */
// const PROMPT_DELAY = 3000;//Проміжок часу, через який буде викликатись ф-ція
// const MAX_PROMPT_ATTEMPTS = 3;//К-сть разів, скільки буде викликатись ф-ція

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log('Потрібно зупинити інтервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишись на розсилку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);//Через кожні PROMPT_DELAY мілісекунд буде виводитись в консоль
//напис і щоразу значення promptCounter буде збільшуватись на 1
// const modal = new BSN.Modal('#subscription-modal');
//коли ж кількість викликів досягне MAX_PROMPT_ATTEMPTS,
//зупиняємо інтервал. Для цього нам потрібен intervalId


/**
 * ====З використанням Бустрап нейтів======
 */
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);
// modal.show();//Модальне вікно відкриється одразу при завантаженні сторінки

const PROMPT_DELAY = 1000;//Проміжок часу, через який буде викликатись ф-ція
const MAX_PROMPT_ATTEMPTS = 3;//К-сть разів, скільки буде викликатись ф-ція
let promptCounter = 0;

// setTimeout(() => {
//   console.log('Відкриваємо модалку');
// modal.show();
// }, PROMPT_DELAY)// Модальне вікно відкриється через PROMPT_DELAY мс, має закриватись 
//при натисканні на кнопку close
openModal();

//-- Вішаємо слухача на весь основний div з id="subscription-modal". При кліку на кнопку close відбувається подія
//--hide.bs.modal. Її використаємо у якості івента і запустимо setTimeout кожного разу, як закривається модалка

refs.modal.addEventListener('hide.bs.modal', () => {
  openModal();
});

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

  setTimeout(() => {
    console.log('Открываем модалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
};

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
