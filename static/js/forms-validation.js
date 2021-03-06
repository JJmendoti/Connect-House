"use strict";

function validateFields() {
  let name = document.getElementById("name").value;
  let identification = document.getElementById("identification").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let avatar = document.getElementById("avatar").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Nombre esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (identification === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Documento esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (identification.length < 9) {
    Swal.fire({
      title: "Advertencia",
      text: "Ingrese al menos 9 caracteres para continuar",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (city === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Ciudad esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }  else if (country === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Pais esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (avatar === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Imagen de Perfil esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (email === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Email esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (password === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Contraseña esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (!passwordNum(password)) {
    Swal.fire({
      title: "Advertencia",
      text: "Contraseña incorrecta debe tener al menos un número",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    console.log(password);
    return false;
  }
  return true;
}
function validateFieldsPrio() {
  let namePrio = document.getElementById("namePrio").value;
  let identificationPrio = document.getElementById("identificationPrio").value;
  let cityPrio = document.getElementById("cityPrio").value;
  let countryPrio = document.getElementById("countryPrio").value;
  let avatarPrio = document.getElementById("avatarPrio").value;
  let emailPrio = document.getElementById("emailPrio").value;
  let passwordPrio = document.getElementById("passwordPrio").value;

  if (namePrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Nombre esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (identificationPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Documento esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (identificationPrio.length < 9) {
    Swal.fire({
      title: "Advertencia",
      text: "Ingrese al menos 9 caracteres para continuar",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (cityPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Ciudad esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }  else if (countryPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Pais esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (avatarPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Imagen de Perfil esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (emailPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Email esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (passwordPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Contraseña esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (!passwordNum(passwordPrio)) {
    Swal.fire({
      title: "Advertencia",
      text: "Contraseña incorrecta debe tener al menos un número",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
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

function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Email esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (password === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Contraseña esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (!passwordNum(password)) {
    Swal.fire({
      title: "Advertencia",
      text: "Contraseña incorrecta debe tener al menos un número",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    console.log(password);
    return false;
  }
  return true;
}

function validateLoginPrio() {
  let emailPrio = document.getElementById("emailPrio").value;
  let passwordPrio = document.getElementById("passwordPrio").value;

  if (emailPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Email esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (passwordPrio === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo Contraseña esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (!passwordNum(passwordPrio)) {
    Swal.fire({
      title: "Advertencia",
      text: "Contraseña incorrecta debe tener al menos un número",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    console.log(passwordPrio);
    return false;
  }
  return true;
}

function validateAddApartment() {
  let title = document.getElementById("title").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let direction = document.getElementById("direction").value;
  let location = document.getElementById("location").value;
  let images = document.getElementById("images").value;
  let outstandingImage = document.getElementById("outstandingImage").value;
  let nightValue = document.getElementById("nightValue").value;
  let review = document.getElementById("review").value;

  if (title === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo title esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (city === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo city esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (country === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo country esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (direction === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo direction esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (images === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo images esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (outstandingImage === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo outstandingImage esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (location === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo location esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (nightValue === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo nightValue esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  } else if (review === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo review esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }
}



let validateSearches = () => {

  let ubication = document.getElementById("ubication").value;
  let salidas = document.getElementById("salidas").value;
  let llegada = document.getElementById("llegada").value;
  let huespedes = document.getElementById("huespedes").value;


  if (ubication === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo ubicación esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (salidas === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo salida esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else if (llegada === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo llegada esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;

  }else if (huespedes === "") {
    Swal.fire({
      title: "Advertencia",
      text: "El campo huespedes esta vacio",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      toast: true,
      width: 600,
      height: 600,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }
}


let validateEmail = (email) => {
  let exReEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let validEmail = exReEmail.test(email);
  if (validEmail==true) {
    Swal.fire({
      title: "Advertencia",
      text: "El correo es valido",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }else{
    Swal.fire({
      title: "Advertencia",
      text: "Su correo ingresado no es valido",
      icon: "warning",
      confirmButtonText: "Continuar",
      footer:
        '<span class="footer-alert">Esta información es importante</span>',
      background: "#fff",
      backdrop: true,
      width: 600,
      height: 600,
      toast: true,
      position: "center",
      allowOutsideClick: false,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: false,
      showConfirmButton: true,
      confirmButtonColor: "#efb810",
      confirmButtonAriaLabel: "Continuar",
      buttonsStyling: true,
      showCloseButton: true,
      closeButtonAriaLabel: "close alert",
    });
    return false;
  }
}