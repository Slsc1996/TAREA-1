document.getElementById("myForm").addEventListener("submit", function (evento) {
  var correo = document.getElementById("exampleInputEmail1").value;
  var contraseña1 = document.getElementById("exampleInputPassword1").value;
  var contraseña2 = document.getElementById("exampleInputPassword2").value;
  var telefono = document.getElementById("telephone").value;
  var plataforma = document.getElementById("dropdown").value;
  var fechaNacimiento = new Date(document.getElementById("date").value);
  var checkbox = document.getElementById("exampleCheck1").checked;

  if (!validarCorreo(correo)) {
    alert("Por favor, introduce un correo electrónico válido.");
    evento.preventDefault();
    return;
  }

  if (!validarContraseña(contraseña1, contraseña2)) {
    evento.preventDefault();
    return;
  }

  if (!validarTelefono(telefono)) {
    evento.preventDefault();
    return;
  }

  if (plataforma === "") {
    alert("Por favor, selecciona una plataforma.");
    evento.preventDefault();
    return;
  }

  if (!validarEdad(fechaNacimiento)) {
    evento.preventDefault();
    return;
  }

  if (!checkbox) {
    alert("Debes aceptar las condiciones y el aviso legal.");
    evento.preventDefault();
    return;
  }

  var modal = document.getElementById("confirmationModal");
  modal.classList.add("show");
  modal.style.display = "block";

  evento.preventDefault();

  setTimeout(function(){
    window.location.href = "index.html";
  }, 3000); 
  
});

function validarCorreo(correo) {
  var expresionCorreo = /^[^\s@]+@(hotmail|gmail)\.com$/;
  return expresionCorreo.test(correo);
}

function validarContraseña(contraseña1, contraseña2) {
  if (contraseña1.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres o más.");
    return false;
  }

  if (contraseña1 !== contraseña2) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  return true;
}

function validarTelefono(telefono) {
  var expresionTelefono = /^\d{9}$/;
  if (!expresionTelefono.test(telefono)) {
    alert("Por favor, introduce un número de teléfono válido de 9 dígitos.");
    return false;
  }

  return true;
}

function validarEdad(fechaNacimiento) {
  var hoy = new Date();
  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  var diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
  ) {
    edad--;
  }
  if (edad < 18) {
    alert("Debes ser mayor de 18 años para registrarte.");
    return false;
  }

  return true;
}
