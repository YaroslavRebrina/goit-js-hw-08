import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('input[name="email"]');
const textAreaRef = document.querySelector('textarea[name="message"]');


let data = {};

const automaticFiller = () => {
    if (localStorage.length !== 0) {
        try {
            const incomingData = JSON.parse(localStorage.getItem(STORAGE_KEY))
            if (incomingData.email) { emailInputRef.value = incomingData.email }
            if (incomingData.message) { textAreaRef.value = incomingData.message }

        } catch (error) {
            console.log(error.message)
        }
    }  
}

automaticFiller()

// зробив callback функцію яка автоматично додає нову властивість в об'єкт, 
//якщо з'являться додаткові інпути

const updatingDataOnInput = (e) => {
    if (!Object.keys(data).includes(e.target.name)) {
        data[e.target.name] = e.target.value.trim()
    } else {
        data[e.target.name] = e.target.value.trim()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); 
}

const onSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(data);
}

formRef.addEventListener("input", throttle(updatingDataOnInput, 500));
formRef.addEventListener("submit", onSubmit);


