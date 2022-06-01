
import Notiflix from 'notiflix';
import '../css/Task-2.css';

const refs = {
  form: document.querySelector('form'),
}

// console.log(refs);

let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  event.preventDefault();
  
  delay = refs.form.elements.delay.value;
  step  = refs.form.elements.step.value;
  amount = refs.form.elements.amount.value;
  }  

function onFormSubmit(event)  {
  event.preventDefault();
  
    const intervalId = setInterval(() => {
     
      if (position === Number(amount)) {
        
        console.log('потрібно зупинити інтервал');
        clearInterval(intervalId);
        return;
           
        } 
  
      console.log('запускаю інтервал');
       position += 1;
       delay = (Number(delay) + Number(step));    
       createPromise(position, delay)
       .then(({ position, delay }) => {
        //  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
         
       })
       .catch(({ position, delay }) => {
        //  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
         
       });
            
   }, delay);
    
 }

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

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });