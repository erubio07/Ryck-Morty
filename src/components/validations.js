const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/

export default function validation (inputs){
    let errors = {};

    if(!inputs.username) errors.username = "Debe Ingresar un nombre de usuario";
    else if (inputs.username.length > 35) errors.username = "Debe contener menos de 35 caracteres";
    else if (!regexEmail.test(inputs.username)) errors.username = "el nombre de usuario debe ser un email";

    if(inputs.password.length < 6) errors.password = "La contraseña es corta"
    else if (inputs.password.length > 10) errors.password = "la contraseña es demasiado larga";
    else if(!regexPassword.test(inputs.password)) errors.password = "Debe contener al menos un número";

    return errors;

}