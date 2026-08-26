const cancha = document.getElementById("cancha");
  const precio = document.getElementById("precio");
  const resumenCancha = document.getElementById("resumenCancha");
  const resumenPrecio = document.getElementById("resumenPrecio");
  const resumenFecha = document.getElementById("resumenFecha");
  const resumenHora = document.getElementById("resumenHora");
  const resumenNombre = document.getElementById("resumenNombre");
  const resumenApellido = document.getElementById("resumenApellido");
  const resumenTelefono = document.getElementById("resumenTelefono");
  const resumenDuracion = document.getElementById("resumenDuracion");
  const precios = {
    "Cancha 1": 40000,
    "Cancha 2": 40000,
    "Cancha 3": 40000,
    "Cancha 4": 30000,
    "Cancha 5": 30000
  };

cancha.addEventListener("change", function () {
  const canchaSeleccionada = cancha.value;
  const precioCancha = precios[canchaSeleccionada];
  precio.value = "$" + precioCancha.toLocaleString("es-CL");
  resumenCancha.textContent = canchaSeleccionada;
  resumenPrecio.textContent ="$" + precioCancha.toLocaleString("es-CL");
});
document.getElementById("fecha").addEventListener("change", function () {
  resumenFecha.textContent = this.value;
});
document.getElementById("hora").addEventListener("change", function () {
  resumenHora.textContent = this.value;
});
document.getElementById("name").addEventListener("change", function () {
  resumenNombre.textContent = this.value;
});
document.getElementById("lastname").addEventListener("change", function () {
  resumenApellido.textContent = this.value;
});
document.getElementById("telefono").addEventListener("change", function () {
  resumenTelefono.textContent = this.value;
});
document.getElementById("duracion").addEventListener("change", function () {
  resumenDuracion.textContent = this.value;
});


const myModal = document.getElementById('exampleModal');

myModal.addEventListener('shown.bs.modal', () => {
  // Seleccionamos los spans del modal por su ID exacto y les asignamos el valor de los inputs
  document.getElementById('resumenNombre-modal').textContent = document.getElementById("name").value;
  document.getElementById('resumenApellido-modal').textContent = document.getElementById("lastname").value;
  document.getElementById('resumenTelefono-modal').textContent = document.getElementById("telefono").value;
  document.getElementById('resumenCancha-modal').textContent = document.getElementById("cancha").value;
  document.getElementById('resumenFecha-modal').textContent = document.getElementById("fecha").value;
  document.getElementById('resumenHora-modal').textContent = document.getElementById("hora").value;
  document.getElementById('resumenDuracion-modal').textContent = document.getElementById("duracion").value;
  document.getElementById('resumenPrecio-modal').textContent = document.getElementById("precio").value;
})
