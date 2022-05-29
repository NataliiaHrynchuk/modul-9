/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 2000);
});

console.log(promise);

// promise.then(
//     result => {
//     console.log(result);
//     },
//     error => {
//         console.log(error);
//     },
// );

/**Тепер те саме з використанням 2-х функцій:
 * onFulfilled - на виведення рез-ту успішного виконання промісу,
 * onRejected - на виведення рез-ту обробки помилки
 */


// promise.then(onFulfilled, onRejected); //*--закоментувала, щоб не заважало наступному прикладу

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//     .then(result => {
//         console.log(result);   //Промис выполнился успешно, с результатом (исполнен, fulfilled)
    // })
    // .then(x => {
    //     console.log(x);       //undefined, тому що не було повернення після першого then
    // });

//------------------------------------------------
// promise
//     .then(result => {
//         console.log(result);     //Промис выполнился успешно, с результатом (исполнен, fulfilled)
    //     return 5;
    //     })
    // .then(x => {
    //     console.log(x);         // 5
        // });
//-------------------------------------------------
// promise
//     .then(onFulfilled, onRejected)   //Промис выполнился успешно, с результатом (исполнен, fulfilled)
                                      // або ❌ Промис выполнился с ошибкой (отклонён, rejected)
    // .then(
    //     x => {
    //         console.log(x);      //undefined

            // throw new Error('помилка в другому then'); // навмисне кидання помилки вручну
    //         return 10;
    //     },
    //     error => console.log(error),
    // )
    // .then(
    //     y => console.log(y),    
    //     error => console.log(error),   //Error: помилка в другому then
    // );
    
    
    //------------------------------------------------------------

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);

    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду выполнен в любом случае'));