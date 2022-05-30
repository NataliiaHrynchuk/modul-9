import '../css/common.css';
import '../css/racetrack.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
//*----Перед викликом ф-ції run оголошуємо, що заїзд почався в синхронному коді,
//----бо рез-т ф-ції run побачимо з затримкою time --------

// console.log(
//   '%c 🤖 Заїзд почався, ставки не приймаються!',
//   'color: brown; font-size: 14px;',
// );                                 //*--значок %c робить так, що в консоль виводиться тільки перший рядок,
                                   // а другий застосовується до нього, як стилі



//*--ф-ція run, що запускає 1 коня, який прибіжить через час, який згенерований ф-цією
//--getRandomTime. Рез-том ф-ції run буде проміс, (його рез-т завідомо позитивний),
//--в рез-ті якого отримаємоо об'єкт з ім'ям коня і часом забігу:

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

// run('Манго').then(x => console.log(x));

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} //ф-ція, що генерує рандомний час в межах від min до max

//**---Але нам потрібно запустити не 1, а всіх коней, тому створюємо
//  масив промісів, мепаємо кожного коня і отримуємо на кожного коня
//   об'єкт з його іменем і часом забігу * /

// const promises = horses.map(horse => run(horse));//*-- цей запис можна скоротити до такого
const promises = horses.map(run);
// console.log(promises);

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(x => console.log(x)); //*--рез-т промісу можна деструктуризувати,
                                                    //*--щоб використати вл-сті у переможному написі 
                                                    //в консолі: 
//*--- Вдосконалюємо:

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c 🎉 Переміг ${horse}, фінішувавши за ${time} часу`,
//     'color: green; font-size: 14px;',
//   );
// });

/*
 * Promise.all([]) для ожидания всех промисов
 */

// Promise.all(promises).then(x => {
//   console.log(x);
// });                           //*--рез-том буде масив об'єктів

//*--- Вдосконалюємо:
//  Promise.all(promises).then(() => {
//    console.log(
//     '%c 📝 Заїзд закінчився, приймаються ставки',
//     'color: blue; font-size: 14px;',
//   );
// }); 

//**
 //* -----Вдосконалюємо інтерфейс--------------------------
 
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};


// refs.startBtn.addEventListener('click', () => {
//   const promises = horses.map(run);
   
  // refs.winnerField.textContent = ''; //*--очищуємо поле про переможця перед наступним заїздом
                                        //*-а тепер робимо це коротше:
  // updateWinnerField('');
  // refs.progressField.textContent = '🤖Заїзд почався, ставки не приймаються!'; //замінюємо на виклик ф-ції
  // updateProgressField('🤖Заїзд почався, ставки не приймаються!');
  
  // Promise.race(promises).then(({ horse, time }) => {
  //   // refs.winnerField.textContent = `🎉 Переміг ${horse}, фінішувавши за ${time} часу`; //*--тепер скорочуємо:
  //   updateWinnerField(`🎉 Переміг ${horse}, фінішувавши за ${time} часу`);
  //   updateResultsTable({ horse, time });
  // }); //***--замінюємо ф-цією:
  // determineWinner(promises);
  
  // Promise.all(promises).then(() => {
    // refs.progressField.textContent = '📝 Заїзд закінчився, приймаються ставки'; //замінюємо на виклик ф-ції
//     updateProgressField('📝 Заїзд закінчився, приймаються ставки');
// }); //*--замінюємо ф-цією:
  
//   waitForAll(promises);
// });

//*==========Тепер створимо ф-цію onStart(), в яку запхнемо всі використовувані нами ф-ції
//*  і поставим її колбеком на слухача до кнопки старт
//* -- також вводимо глобальну змінну let raceCounter = 0
//*--для підрахунку к-сті заїздів. Кожного разу при запуску
//*-- старту її значення буде збільшуватись на 1:


let raceCounter = 0;
refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('🤖 Заїзд почався, ставки не приймаються!');
  determineWinner(promises);
  waitForAll(promises);
}

//*--Ф-ція по збору і використанню інф-ції про переможця:

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}
//*--ф-ція, що дочекається завершення всіх промісів:

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заїзд закінчився, приймаються ставки');
  });
}

//*----ф-ція заповнення поля переможця:
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
} 

//*----ф-ція заповнення поля стану гонок:
function updateProgressField(message) {
  refs.progressField.textContent = message;
} 

//*----ф-ція заповнення таблички
// function updateResultsTable({ horse, time}) {
//   const tr = `<tr>
//     <td></td>
//     <td>${horse}</td>
//     <td>${time}</td>
//   </tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

//*--тепер те саме з викор-ням raceCounter
function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr>
  <td>${raceCounter}</td>
  <td>${horse}</td>
  <td>${time}</td>
  </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}




// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

