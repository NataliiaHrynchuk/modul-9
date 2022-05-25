

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/
// const date = new Date();
// const date = new Date(1000);
// console.log(date);
// console.dir(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getTime());

//----Різниця між датами----
// const date1 = new Date();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date();
//   console.log('date1', date1);
//   console.log('date2', date2);
//   console.log(date2 - date1);
// }, 3000);


//---Те ж саме, але у вигляді к-сті мс--

// const date1 = new Date().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date().getTime();
//   console.log('date1', date1);
//   console.log('date2', date2);
//   console.log(date2 - date1);
// }, 3000);

//---Щоб отримати такий же результат,
//--але не об'єкт, а просто число і зекономити
//-- пам'ять, викор-мо Date.now()


const date1 = Date.now();
console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);

  console.log(date2 - date1);
}, 3000);
