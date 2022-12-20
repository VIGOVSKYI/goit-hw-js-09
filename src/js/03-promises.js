import Notiflix from 'notiflix';

const formRef = document.querySelector(".form");

formRef.addEventListener("submit", onSubmit);

const valueInput = {
  delay: 0,
  step: 0,
  amount: 0,
};

function getValueInput() {
  for (const key in valueInput) {
    valueInput[key] = Number(formRef[key].value);
  }
  // console.log(valueInput);
}

function getPromise() {
  let delay = valueInput.delay;
  // console.log(delay);

  for (let position = 1; position <= valueInput.amount; position += 1) {
    // console.log(position);

    createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    delay += valueInput.step;
  }
}

function onSubmit(e) {
  e.preventDefault();

  getValueInput();
  getPromise();
}

function createPromise(position, delay) {

  return new Promise((fulfill, reject) => {

  const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
       if (shouldResolve) {
      fulfill({ position, delay })
       } else {
      reject({ position, delay })
    }
      
    }, delay);
   
  })
}
