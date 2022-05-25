
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
  subscribeBtn: document.querySelector('button[data-subscribe]'),//-- кнопка підписки, додана Репетою
  closeBtn: document.querySelector('button[data-dismiss]'),//-- вводжу цю кнопку сама, бо вона в мене не слухається 
};

const modal = new BSN.Modal('#subscription-modal');
console.log(modal);
// modal.show();//-- Модальне вікно відкриється одразу при завантаженні сторінки

const PROMPT_DELAY = 1000;//--Проміжок часу, через який буде викликатись ф-ція
const MAX_PROMPT_ATTEMPTS = 3;//--К-сть разів, скільки буде викликатись ф-ція
let promptCounter = 0;//--Лічильник к-сті викликів ф-ції setTimeout
let hasSubscribed = false; //--Показник, чи підписались чи ні

// setTimeout(() => {
//   console.log('Відкриваємо модалку');
// modal.show();
// }, PROMPT_DELAY)//-- Модальне вікно відкриється через PROMPT_DELAY мс, має закриватись 
//-- при натисканні на кнопку close
openModal();

//-- Вішаємо слухача на весь основний div з id="subscription-modal". При кліку на кнопку close відбувається подія
//--hide.bs.modal. Її використаємо у якості івента і запустимо setTimeout кожного разу, як закривається модалка

// refs.modal.addEventListener('hide.bs.modal', () => {
//   openModal();
// });// -- Можна так, а можна коротше:
refs.modal.addEventListener('hide.bs.modal', openModal);

refs.closeBtn.addEventListener('click', () => {
  modal.hide();
}); //-- Оскільки моя закриваюча кнопка не діє за замовчуванням, то вішаю на неї слухача
// -- і при кліку викликаю м-д hide


// refs.subscribeBtn.addEventListener('click', () => {
// hasSubscribed = true;
//   modal.hide();  //--М-д закриття модалки. Як тільки ми закриваємо модалку, то відбувається
                     // -- hide.bs.modal і викликається setTimeout, як ми прописали вище,  
                     // -- але ми вказали hasSubscribed = true, щоб вийти з ф-ції openModal
// });

//--- Записуємо коротше:
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;  //-- Якщо кількість викликів досягла максимального розміру, або натисли 
             //-- підписку, то виходим з ф-ції, і більше setTimeout не викличеться
  }
  setTimeout(() => {
    console.log('Открываем модалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
};

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
} //-- Ф-ція підписки, під час виконання якої показник підписки стає true і модалка зникає
