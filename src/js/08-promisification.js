/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */


//*----Рішення через колбек--------------*/
// const makeOrder = (dish, onSuccess, onError) => {
//   const DELAY = 1000;
//   const passed = Math.random() > 0.5;
//   setTimeout(() => {
//     if (passed) {
//       onSuccess('ось ваша страва');
//     } else {
//       onError('вибачте, цієї страви немає')
//     }
//   }, DELAY);
// };

// makeOrder('пиріжок', onMakeOrderSuccess, onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//*---------------------------------------------------------------------------------
//*--------те ж саме через проміс-----------------------* /

// const makeOrder = dish => {
//   const DELAY = 1000;

//   const promise = new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ ось ваша страва');
//       }
//       reject('❌ вибачте, цієї страви немає');
//     }, DELAY);
//   });
//   return promise;
// };

// const p = makeOrder('пирiжок');
// console.log(p);
// p.then(onMakeOrderSuccess).catch(onMakeOrderError);

  
//  function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }


//**--------------------------------------------------------------
//-----------Як почистити і зробити коротше------------------- * /
// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ось ваша страва: ${dish}`);
//       }

//       reject('❌ Вибачте, цієї страви немає');
//     }, DELAY);
//   });
// };
 
// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//================================================================================
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = (dish, onSuccess, onError) => {
  
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Ось ваша страва: ${dish}`);
//       }

//       reject('❌ Вибачте, цієї страви немає');
//     });
//   });
// };
 
// makeOrder('пиріжок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//=======================================================================
//----якщо рез-т завжди буде лише вдалим, то можна так:--------------------

// const makeOrder = dish => {
//   return Promise.resolve(`✅ Ось ваша страва: ${dish}`);
// };

// makeOrder('пиріжок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//=======================================================================

/*
 * Покемоны с https://pokeapi.co/
 */

// fetch('https://pokeapi.co/api/v2/pokemon/4')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//   })
//   .catch(error => {
//     console.log('це в блоці catch');
//     console.log(error);
//   }); //*робим запит на сервер і отримуєм покемона у форматі json

  //================якщо нам потрібно кілька разів робити запити:====

// const fetchPokemonById = id => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//       console.log(pokemon);
//     })
//     .catch(error => {
//       console.log('це в блоці catch');
//       console.log(error);
//     });
// };

// fetchPokemonById(1);
// fetchPokemonById(2);
// fetchPokemonById(3);

//====Зробимо так, щоб ф-ція fetchPokemonById мало знала про зовнішній код, 
//--- а видавала лише проміс------------------

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Это в блоке catch');
//   console.log(error);
// }

makePromise
const makePromise = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('✅ Куку это resolve');
      }

      reject('❌ все пропало это reject');
    }, 2000);
  });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));