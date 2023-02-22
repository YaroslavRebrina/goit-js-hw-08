import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

let data = {};

const automaticFiller = () => {
 const incomingData = localStorage.getItem(STORAGE_KEY);

 if (incomingData) {
 data = JSON.parse(incomingData);
 try {
 const formKeys = Object.entries(data);
 formKeys.forEach(([name, value]) => {
 formRef[name].value = value
      });
    } catch (error) {
 console.log(error.message);
    }
  }
}; 

automaticFiller();

// зробив callback функцію яка автоматично додає нову властивість в об'єкт,
//якщо з'являться додаткові інпути

const updatingDataOnInput = e => {
  data[e.target.name] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const onSubmit = e => {
  e.preventDefault();
  console.log(data);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  data = [];
};

formRef.addEventListener('input', throttle(updatingDataOnInput, 500));
formRef.addEventListener('submit', onSubmit);
