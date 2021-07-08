const data = {
  name: "",
  email: "",
  message: "",
};

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector(".form");

name.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
message.addEventListener("input", leerTexto);

function leerTexto(e) {
  /* console.log(e.target.value); */
  data[e.target.id] = e.target.value;

  //console.log(datos);
}

/* Validar formulario */
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const { name, email, message } = data;

  if (name == "" || email == "" || message == "") {
    showAlert("Todos los campos son obligatorios", true);
    return;
  }
  showAlert("Datos enviados correctamente");
});

/* Mostrar alerta en pantalla */

function showAlert(message, error = null) {
  const alert = document.createElement("P");
  alert.textContent = message;

  if (error) {
    alert.classList.add("error");
  } else {
    alert.classList.add("correct");
  }

  form.appendChild(alert);

  //Desaparecer el message de error

  setTimeout(() => {
    alert.remove();
  }, 4000);
}
