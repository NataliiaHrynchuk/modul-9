
import '../css/common.css';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

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

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);
modal.show();
// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
