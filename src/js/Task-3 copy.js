
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/Task-3.css';
// import '../css/Task-2.css';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
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

let position = 0;

const delays = [];

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event)  {
    event.preventDefault();

    let delay = form.elements.delay.value;
    const step  = form.elements.step.value;
    const amount = form.elements.amount.value;
  
  for (let i = 1; i <= amount; i += 1) {
    delays.push(Number(delay));
    delay = Number(delay) + Number(step);
    };

  console.log(delays);

  const promises = delays.map(delay => {
    
    position += 1;
    console.log(position);
    console.log(delay);
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,  {timeout: 5000,});
   })
   .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,  {timeout: 5000,});
   });
   
   })
   
   console.log(promises);
  //  showMessage(promises);
  
    delays.splice(0, amount);
    position = 0;
   }





  

