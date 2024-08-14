document.getElementById('regBtn').addEventListener('click', function(event) {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    
    

// Reset alerts
hideAlerts();


    // Validar contraseñas
    if (password1 !== password2) {
        showAlertError();
        return;
    }


    // Validar términos y condiciones
    if (!terminos) {
        showAlertError();
        return;
    }

    if(password1.length <= 5){ 
        showAlertError(); 
        return; 
      } 

      if(password2.length <= 5){ 
        showAlertError(); 
        return; 
      } 

      if(nombre === ""){
        showAlertError();
        return;
      }

    if(apellido === ""){
        showAlertError();
        return;
    }

    if(email === ""){
        showAlertError();
        return;
    }

    // Si todas las validaciones pasan
    showAlertSuccess();
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function hideAlerts() {
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");
}


