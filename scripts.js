const validateEmpty = (input, errorSelector) =>{
    if (input.value == "" ){
        input.classList.add("show-error");
        const nameErrorMessage = document.getElementById(errorSelector);
        nameErrorMessage.classList.remove("hidden");
    } else {
        console.log(input.value)
    }
}

const clearErrors = (input, message) =>{
    if(input.value != ""){
        message.classList.add("hidden");
        input.classList.remove("show-error");
    }
}

const load = () =>{
    const name = document.getElementById("name-input");
    const nameMessage =  document.getElementById("name-error");
    name.addEventListener("keyup", () => clearErrors(name, nameMessage));
    const surname = document.getElementById("surname-input");
    const surnameMessage =  document.getElementById("surname-error");
    surname.addEventListener("keyup", () => clearErrors(surname, surnameMessage));
    const phone = document.getElementById("phone-input");
    const phoneMessage =  document.getElementById("phone-error");
    phone.addEventListener("keyup", () => clearErrors(phone, phoneMessage));
}

const sendData = () =>{
    const name = document.getElementById("name-input");
    validateEmpty(name, "name-error");
    const surname = document.getElementById("surname-input");
    validateEmpty(surname, "surname-error");
    const phone = document.getElementById("phone-input");
    validateEmpty(phone, "phone-error");
    const comments = document.getElementById("comments").value;
    console.log(comments);
}
