import '../css/common.css';
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// const timer = {
//   intervalId: null,
//   isActiv: false,
//   start() {
//     if (this.isActiv) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActiv = true;

//     this.intervalId = setInterval(() => {
      // console.log('start -> startTime', startTime);
      // const currentTime = Date.now();
      // console.log('currentTime', currentTime);
      // const deltaTime = currentTime - startTime;
      // const timeComponents = getTimeComponents(deltaTime);
      // console.log(timeComponents);
      // const { hours, mins, secs } = getTimeComponents(deltaTime);//--деструктуризуємо об'єкт з рядка 76
      // console.log(`${hours}:${mins}:${secs}`);

      //--Коли використовуємо ф-цію updateClockface, то деструктуризація вже не потрібна,
      //-- бо вона відбувається всередині цієї ф-ції:--
//       const time = getTimeComponents(deltaTime);
//       updateClockface(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActiv = false;
//   },
// };

// timer.start(); //-- Запускається при оновленні сторінки
//---А так запускається кнопкою старт:--- 

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

//--Зупиняється кнопкою стоп:-------
refs.stopBtn.addEventListener('click', () => {
  timer.stop();
})

/*
//    * - Принимает время в миллисекундах
//    * - Высчитывает, сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
//   function getTimeComponents(time) {
//     const hours = pad
//       (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// };

  /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число 
меньше 2-х знаков
//    */
//   function pad(value) {
//     return String(value).padStart(2, '0');
// };

  // /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

/**
 * ====Тепер зробимо все через клас====
 */

class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    

    // this.init();
  }

  // init() {
  //   const time = this.getTimeComponents(0);
  //   this.onTick(time);
  // }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);//--це посилання на ф-цію updateClockface, яку ми таким чином викликаємо
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  getTimeComponents(time) {
    const hours = this.pad
      (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }//--тепер це м-д класу
  
  pad(value) {
    return String(value).padStart(2, '0');
} //--тепер це м-д класу
}

const timer = new Timer({
  onTick: updateClockface,
});

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
