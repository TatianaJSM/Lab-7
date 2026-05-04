import { curso } from "./curso.js";
import { obtenerTemas, buscarTema } from "./tarea.js";
import { guardarTemaSeleccionado, obtenerTemaSeleccionado } from "./almacenamiento.js";

const menuTemas = document.querySelector("#menuTemas");
const detalleTema = document.querySelector("#detalleTema");

const temas = obtenerTemas(curso);
let temaActivo = obtenerTemaSeleccionado() || temas[0].id;

function pintarMenu() {
  menuTemas.innerHTML = "";

  curso.fases.forEach(fase => {
    const seccion = document.createElement("section");
    seccion.classList.add("fase");

    const titulo = document.createElement("h2");
    titulo.textContent = fase.nombre;

    const grid = document.createElement("div");
    grid.classList.add("grid-temas");

    fase.temas.forEach(tema => {
      const boton = document.createElement("button");
      boton.classList.add("tema-cubo");

      if (tema.id === temaActivo) {
        boton.classList.add("activo");
      }

      boton.textContent = tema.codigo;
      boton.title = tema.titulo;

      boton.addEventListener("click", () => {
        temaActivo = tema.id;
        guardarTemaSeleccionado(temaActivo);
        pintarTodo();
      });

      grid.appendChild(boton);
    });

    seccion.appendChild(titulo);
    seccion.appendChild(grid);
    menuTemas.appendChild(seccion);
  });
}

function pintarDetalle() {
  const tema = buscarTema(curso, temaActivo);

  detalleTema.innerHTML = `
    <article class="panel">
      <span class="badge">${tema.nivel}</span>
      <span class="badge">${tema.duracion}</span>

      <h1>${tema.titulo}</h1>
      <p>${tema.descripcion}</p>

      <div class="video">
        <iframe src="${tema.video}" allowfullscreen></iframe>
      </div>

      <h2>Highlights</h2>
      ${tema.highlights.map(highlight => `
        <div class="highlight">
          <span>${highlight.tiempo}</span>
          <strong>${highlight.titulo}</strong>
        </div>
      `).join("")}

      <h2>Capítulos</h2>
      ${
        tema.capitulos.length > 0
          ? tema.capitulos.map(capitulo => `
              <div class="capitulo">
                <strong>${capitulo.titulo}</strong>
                <p>${capitulo.descripcion}</p>
              </div>
            `).join("")
          : "<p>Este tema todavía no tiene capítulos editados.</p>"
      }

      <h2>Recursos y retos</h2>
      ${tema.recursos.map(recurso => `
        <div class="recurso">${recurso}</div>
      `).join("")}
    </article>
  `;
}

function pintarTodo() {
  pintarMenu();
  pintarDetalle();
}

pintarTodo();