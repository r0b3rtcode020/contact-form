const form = document.querySelector("#contact-form");
const notification = document.querySelector("#notification");
const formGroups = form.querySelectorAll(".form-group");
const allInputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", e => {
  e.preventDefault();
  let isFormValid = true;

  //  1. Limpiamos errores previos en todos los grupos
  formGroups.forEach(group => group.classList.remove("has-error"));

  // 2. Validamos usando la coleccion "allInputs" que ya se definio al inicio
  allInputs.forEach(input => {
    if (!input.checkValidity()) {
      isFormValid = false;
      const group = input.closest(".form-group");
      if (group) {
        group.classList.add("has-error");
      }
    }
  });

  // 3. Si todo es valido, mostramos notificacion y reseteamos
  if (isFormValid) {
    // Aqui se capturan los datos del formulario
    notification.classList.add("show");
    form.reset();
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }
});

// Limpiar error mientras el usuario escribe
allInputs.forEach(input => {
  input.addEventListener("input", () => {
    const group = input.closest(".form-group");
    if (group.classList.contains("has-error")) {
      if (input.checkValidity()) {
        group.classList.remove("has-error");
      }
    }
  });
});
