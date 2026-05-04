const CLAVE_TEMA = "temaSeleccionadoVoleibol";

export function guardarTemaSeleccionado(id) {
  localStorage.setItem(CLAVE_TEMA, id);
}

export function obtenerTemaSeleccionado() {
  return localStorage.getItem(CLAVE_TEMA);
}