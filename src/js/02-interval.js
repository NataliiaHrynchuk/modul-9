

/*
 * === Метод setInterval(callback, delay, args)==
 */

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('До виклику setInterval');
// setInterval(logger, 2000, 2000);
// console.log('Після виклику setInterval');

/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }


/*
 * Як впливає 0 затримка
 */
// console.log('До виклику setInterval');

// setTimeout(() => {
//   console.log('Виклик відкладеної ф-ції');
// }, 0);

// console.log('Після виклику setInterval');

/**
 * Багато сеттаймаутів
 */

console.log('До виклику setInterval');

setTimeout(() => {
  console.log('Виклик відкладеної ф-ції 1000');
}, 1000);

setTimeout(() => {
  console.log('Виклик відкладеної ф-ції 2000');
}, 2000);
console.log('Після виклику setInterval');