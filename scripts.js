let errors = false;
const validateEmpty = (input, errorSelector) =>{
    if (input.value == "" ){
        input.classList.add("show-error");
        const nameErrorMessage = document.getElementById(errorSelector);
        nameErrorMessage.classList.remove("hidden");
        errors = true;
    }
}

const validateEmail = (errorSelector) =>{
    const mail = document.getElementById("email-input");
    const acceptedValues = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail.value);
    if(!acceptedValues){
        mail.classList.add("show-error");
        const nameErrorMessage = document.getElementById(errorSelector);
        nameErrorMessage.classList.remove("hidden");
        errors = true;
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
    const email = document.getElementById("email-input");
    const emailMessage =  document.getElementById("email-error");
    email.addEventListener("keyup", () => clearErrors(email, emailMessage));
}

const sendData = () =>{
    errors = false;
    const name = document.getElementById("name-input");
    validateEmpty(name, "name-error");
    const surname = document.getElementById("surname-input");
    validateEmpty(surname, "surname-error");
    const date = document.getElementById("date-input");
    validateEmail("email-error");
    const phone = document.getElementById("phone-input");
    validateEmpty(phone, "phone-error");
    const comments = document.getElementById("comments");
    if(!errors) {
        const radios = document.getElementsByName("gender");
        const select = document.getElementById("country");
        let gender;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
                break;
            }
        }

        showSuccessMessage();
        console.log(`
            Nombre: ${name.value} ${surname.value},
            Fecha de nacimiento: ${date.value},
            Genero: ${gender},
            Pais: ${select.value},
            Telefono: ${phone.value},
            Comentarios: ${comments.value}
        `)
    }
}

const showSuccessMessage = () =>{
    let container = document.getElementById("success");
    let message = document.createElement("p");
    message.innerHTML ="Informacion enviada con exito";
    container.appendChild(message);
    container.classList.remove("hidden");
}