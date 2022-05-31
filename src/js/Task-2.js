import flatpickr from "flatpickr";
// const flatpickr = require("flatpickr");
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import '../css/Task-2.css';

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
    namesOfTime: document.querySelectorAll('span.label'),
}

// console.log(refs.startBtn);
// console.log(refs.dataDays);
// console.log(refs.dataHours);
// console.log(refs.dataMinutes);
// console.log(refs.dataSeconds);
console.log(refs.namesOfTime);
refs.namesOfTime.forEach((name) => {
    const largeName = name.textContent.toUpperCase();
    name.textContent = `${largeName}`;
    // name.textContent.toUpperCase();
  });

let selectedTime = null;
let currentTime = new Date();
 refs.startBtn.setAttribute("disabled", true);
 refs.startBtn.addEventListener('click', () => {
    timer.start();
  });

// function flatpickr(selector, options);
const options = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {
        //    console.log(selectedDates[0]);
           selectedTime = selectedDates[0];

           if(selectedTime < currentTime) {
            //  window.alert("Please choose a date in the future");
            Notiflix.Notify.failure('Please choose a date in the future');
             return;
           }
           refs.startBtn.removeAttribute("disabled");
          //  console.log(selectedDate.getTime());
      },
  };

  const timer = {
    intervalId: null,
    isActive: false,
    start() {
      if (this.isActive) {
        return;
      }
      // const currentTime = Date.now();
      refs.input.setAttribute('disabled', true);
      this.isActive = true;

      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        // console.log('currentTime', currentTime);
        // console.log("selectedTime", selectedTime);
        const deltaTime = selectedTime - currentTime;
        const {days, hours, minutes, seconds} = convertMs(deltaTime);
      if(deltaTime < 0) {
        
        this.stop();
        return;
      }
      
      // console.log(deltaTime);
      console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
      refs.dataDays.textContent = `${days}`;
      refs.dataHours.textContent = `${hours}`;
      refs.dataMinutes.textContent = `${minutes}`;
      refs.dataSeconds.textContent = `${seconds}`;

      }, 1000);

    },
    stop() {
      clearInterval(this.intervalId);
    this.isActiv = false;
    }

  }
  
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };

 function pad(value) {
      return String(value).padStart(2, '0');
  };

flatpickr("#datetime-picker", options);
// console.log(convertMs(543544455454354));
