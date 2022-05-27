import flatpickr from "flatpickr";
// const flatpickr = require("flatpickr");
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
}

console.log(refs.input);
console.log(refs.startBtn);
console.log(refs.dataDays);
console.log(refs.dataHours);
console.log(refs.dataMinutes);
console.log(refs.dataSeconds);
const selectedDate = null;

refs.input.addEventListener('click', () => {
    options.onClose();
});

// function flatpickr(selector, options);
const options = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
        onClose(selectedDates) {
            selectedDate = selectedDates[0];
      
      
    },
  };
  console.log(options.defaultDate);
  console.log(selectedDate);
//   console.log(selectedDate);
//   console.log(refs.input.value);
flatpickr("#datetime-picker", options);
