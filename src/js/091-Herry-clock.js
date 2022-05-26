import '../css/common.css';
const refs = {
    dateTime: document.querySelector('#date-time'),
    startStop: document.querySelector('#start-stop'),
};
console.log(refs);

let timerId = 0;

const showClock = () => {
    // const currentDate = new Date();//*--без бібліотеки moment
    const currentDate = moment(); //*--з бібліотекою moment

    // refs.dateTime.textContent = currentDate.toString(); //*--без бібліотеки moment
    refs.dateTime.textContent = currentDate.format('YYYY/MM/DD HH:mm:ss');//*--з бібліотекою moment
}

const startClock = () => { 
    timerId = setInterval(showClock, 1000);
    refs.startStop.textContent = 'Stop';
    showClock(); //*--Щоб перший раз годинник запустився без затримки
};
const stopClock = () => {
    clearInterval(timerId);
    refs.startStop.textContent = 'Start';
    timerId = 0;
};
const handleBtnClick = () => { 
    if (timerId) {
        stopClock();
    } else {
        startClock();
    }
};
refs.startStop.addEventListener('click', handleBtnClick);