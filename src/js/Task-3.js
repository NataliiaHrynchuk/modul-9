
import Notiflix from 'notiflix';
import '../css/Task-2.css';
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
   
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({position, delay});
      } else {
        reject ({position, delay});
      }
    }, delay);
  })
}

const form = document.querySelector('form');


// console.log(refs);

// let delay = 0;
// let step = 0;
// let amount = 0;
// let position = 0;

// const delays = [];

// form.addEventListener('change', onFormInput);
form.addEventListener('submit', onFormSubmit);

// function onFormInput(event) {
//   event.preventDefault();
  
//   delay = refs.form.elements.delay.value;
//   step  = refs.form.elements.step.value;
//   amount = refs.form.elements.amount.value;
  
//   for (let i = 1; i <= Number(amount); i += 1) {
//     delays.push(Number(delay));
//     delay = (Number(delay) + Number(step));
//     }
//   console.log(delays);
//   }  

function onFormSubmit(event)  {
  event.preventDefault();

  const delay = Number(event.currentTarget.delay.value);
  const step  = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);
  console.log(delay);
  let newDelay = delay;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, newdelay)
    .then(({ position, delay }) => {
     //  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      
    })
    .catch(({ position, delay }) => {
     //  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      
    });
    newDelay += step;  
        }
  // event.currentTarget.reset();
    
 }

 

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });