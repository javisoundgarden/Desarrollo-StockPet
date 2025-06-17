function validarLogin() {
  const nombre = document.getElementById("nombre").value;
  const password = document.getElementById("password").value;

  if (nombre === "DiegoArmando" && password === "123456789") {
    window.location.href = "menu.html";
    return false; // prevenir envío del formulario
  } else {
    alert("Usuario o contraseña incorrectos");
    return false;
  }
}

function recuperarContrasena() {
  alert("Se envió una solicitud al soporte");
}

function confirmarCerrarSesion() {
  if (confirm("¿Seguro desea cerrar sesión?")) {
    window.location.href = "index.html";
  }
}
