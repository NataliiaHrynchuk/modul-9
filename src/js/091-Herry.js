import '../css/common.css';
console.log('Module 9.1');

console.log(moment);
console.log(moment());

const currentDate = moment();
console.log(currentDate);

const sep11 = moment('01.09.2022 16:45:22', 'DD.MM.YYYY hh:mm:ss');
const sep12 = moment('2022/09/01', 'YYYY/MM/DD');
const sep13 = moment('09-01-2022', 'MM-DD-YYYY');

console.log(sep11.toString());
console.log(sep12.toString());
console.log(sep13.toString());

console.log(sep11.format('YYYY/MM/DD'));
console.log(sep11.format('HH:mm YYYY/MM/DD'));
console.log(sep11.format('hh:mm YYYY/MM/DD'));
console.log(sep11.format('hh:mm a YYYY/MM/DD'));
console.log(sep13.format('YYYY-MM-DD hh:mm A'));
