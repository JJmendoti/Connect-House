"use strict"

function validateFields() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let identification = document.getElementById("identification").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;

    if (name === "") {
        Swal.fire({
            title: "Error",
            text: "El campo name esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    }else if(email === ""){
        Swal.fire({
            title: "Error",
            text: "El campo Email esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (identification === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Documento esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (identification.length >= 9) {
        Swal.fire({
            title: "Error",
            text: "Ingrese al menos 9 caracteres para continuar",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (country === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Pais esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (city === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Ciudad esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (password === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Contraseña esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    } else if (!passwordNum(password)) {
        Swal.fire({
            title: "Error",
            text: "Contraseña incorrecta debe tener al menos un número",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        console.log(password);
        return false;
    }
    return true;
}

function passwordNum(pass) {
    let numberpass = /\d/;
    return numberpass.test(pass);
}




function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === ""){
        Swal.fire({
            title: "Error",
            text: "El campo Email esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    }else if(password === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Contraseña esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;
    }else if (!passwordNum(password)) {
        Swal.fire({
            title: "Error",
            text: "Contraseña incorrecta debe tener al menos un número",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        console.log(password);
        return false;
    }
    return true;

}


function validateLoginPrio(){
    let emailPrio = document.getElementById("emailPrio").value;
    let passwordPrio = document.getElementById("passwordPrio").value;

    if(emailPrio === ""){
        Swal.fire({
            title: "Error",
            text: "El campo Email esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;

    }else if(passwordPrio === "") {
        Swal.fire({
            title: "Error",
            text: "El campo Contraseña esta vacio",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        return false;
    }else if (!passwordNum(passwordPrio)) {
        Swal.fire({
            title: "Error",
            text: "Contraseña incorrecta debe tener al menos un número",
            icon: "error",
            confirmButtonText: 'Continuar',
            footer: '<span class="footer-alert">Esta información es importante</span>',
            background: '#ddd',
            backdrop: true,
            toast: true,
            position: 'center',
            allowOutsideClick: false,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: '#3307c2',
            confirmButtonAriaLabel: 'Continuar',
            buttonsStyling: true,
            showCloseButton: true,
            closeButtonAriaLabel: 'close alert'
        });
        console.log(passwordPrio);
        return false;
    }
    return true;

}

