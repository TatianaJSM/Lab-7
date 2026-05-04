export function obtenerTemas(curso) {
  return curso.fases.flatMap(fase => fase.temas);
}

export function buscarTema(curso, id) {
  return obtenerTemas(curso).find(tema => tema.id === id);
}

export function contarHighlights(curso) {
  return obtenerTemas(curso).reduce((total, tema) => {
    return total + tema.highlights.length;
  }, 0);
}