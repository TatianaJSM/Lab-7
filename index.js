import { course } from "./data.js";
import { getTopics, findTopic } from "./utils.js";
import { curso } from "./curso.js";
import { obtenerTemas, buscarTema } from "./tarea.js";
import { guardarTemaSeleccionado, obtenerTemaSeleccionado } from "./almacenamiento.js";

const tree = document.getElementById("tree");
const viewer = document.getElementById("viewer");

let topics = getTopics(course);
let active = topics[0].id;

function render() {
  tree.course = course;
  tree.active = active;

  viewer.topic = findTopic(course, active);
}

tree.addEventListener("select", (e) => {
  active = e.detail;
  render();
});

render();