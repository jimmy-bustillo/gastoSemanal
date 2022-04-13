// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// Clases

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");
  console.log(Number(presupuestoUsuario));

  // Validar que no este vacio, que no sea un null, que no sea un String  y que no sea 0 o negativo
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
}
