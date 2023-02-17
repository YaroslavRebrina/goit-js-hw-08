import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
let data = {};

// зробив callback функцію яка автоматично додає нове значення, 
//якщо з'являться додаткові інпути

const updatingData = (e) => {
    if (!Object.keys(data).includes(e.target.name)) {
        data[e.target.name] = e.target.value
    } else {
        data[e.target.name] = e.target.value
    }

    console.log(data)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); 
}

form.addEventListener("input", updatingData)



