

/*
 * ====Метод window.setTimeout(callback, delay, args)===
 */
// const logMaseege = () => {
//   console.log('Лог при виклику колбек ф-ції ч-з 3с');
// }
// console.log('До виклику setTimeout');


// setTimeout(() => {
//   console.log('1 - Всередині callback для setTimeout');
// }, 2000);

// setTimeout((x) => {
//   console.log(x);
//   console.log('2 - Всередині callback для setTimeout');
// }, 1000, 50);

// console.log('Після ввиклику setTimeout');
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
/*
 * ==== Очистка таймаута с clearTimeout(timeoutId)====
 */

const logger = time => {
  console.log(`Лог через ${time}ms, тому що не відмінили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);//при виклику таймаута
// браузер присвоює йому унікальний ідентифікатор

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3; //чи потрібно відміняти таймер 
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
