const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation (userData){
    let errors = {};

    if(!userData.username) errors.username = "Debe Ingresar un nombre de usuario";
    else if (userData.username.length > 35) errors.username = "Debe contener menos de 35 caracteres";
    else if (!regexEmail.test(userData.username)) errors.username = "El nombre de usuario debe ser un email";

    if(userData.password.length < 6) errors.password = "La contraseña es corta"
    else if (userData.password.length > 10) errors.password = "la contraseña es demasiado larga";
    else if(!regexPassword.test(userData.password)) errors.password = "Debe contener al menos un número";

    return errors;

}