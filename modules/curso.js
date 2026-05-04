export const curso = {
  nombre: "Curso de Voleibol desde Cero",
  descripcion: "Aprende voleibol por fases, habilidades, videos y retos.",
  fases: [
    {
      nombre: "Fase 1 · Fundamentos",
      temas: [
        {
          id: "saque",
          codigo: "SAQ",
          titulo: "Saque",
          nivel: "Inicial",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duracion: "2h 15m",
          descripcion: "Aprende la postura, el lanzamiento del balón y los tipos de saque.",
          highlights: [
            { tiempo: "00:05:20", titulo: "Posición inicial" },
            { tiempo: "00:18:40", titulo: "Saque bajo" },
            { tiempo: "00:45:10", titulo: "Saque flotante" }
          ],
          capitulos: [
            {
              titulo: "Saque bajo resumido",
              descripcion: "Resumen rápido para dominar el saque bajo."
            }
          ],
          recursos: [
            "Practicar 20 saques bajos",
            "Marcar zonas de saque",
            "Reto: 10 saques dentro de la cancha"
          ]
        },
        {
          id: "recepcion",
          codigo: "REC",
          titulo: "Recepción",
          nivel: "Inicial",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duracion: "2h 40m",
          descripcion: "Entrena la recepción con antebrazos, posición defensiva y control.",
          highlights: [
            { tiempo: "00:10:00", titulo: "Plataforma de brazos" },
            { tiempo: "00:28:30", titulo: "Flexión de piernas" },
            { tiempo: "01:05:15", titulo: "Dirección del pase" }
          ],
          capitulos: [],
          recursos: [
            "Recepción contra pared",
            "Recepción en parejas",
            "Reto: 15 recepciones controladas"
          ]
        }
      ]
    },
    {
      nombre: "Fase 2 · Ataque",
      temas: [
        {
          id: "remate",
          codigo: "REM",
          titulo: "Remate",
          nivel: "Intermedio",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duracion: "3h 10m",
          descripcion: "Aprende carrera de impulso, salto, golpeo y dirección del remate.",
          highlights: [
            { tiempo: "00:12:15", titulo: "Carrera de impulso" },
            { tiempo: "00:42:30", titulo: "Brazo de ataque" },
            { tiempo: "01:30:20", titulo: "Dirección del remate" }
          ],
          capitulos: [
            {
              titulo: "Remate básico",
              descripcion: "Capítulo corto sobre impulso, salto y golpe."
            }
          ],
          recursos: [
            "Practicar carrera sin balón",
            "Remate con balón lanzado",
            "Reto: 10 remates dirigidos"
          ]
        },
        {
          id: "bloqueo",
          codigo: "BLO",
          titulo: "Bloqueo",
          nivel: "Intermedio",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duracion: "2h 55m",
          descripcion: "Trabaja el salto vertical, lectura del atacante y posición de manos.",
          highlights: [
            { tiempo: "00:09:30", titulo: "Lectura del atacante" },
            { tiempo: "00:36:00", titulo: "Manos sobre la red" },
            { tiempo: "01:20:44", titulo: "Bloqueo doble" }
          ],
          capitulos: [],
          recursos: [
            "Saltos frente a la red",
            "Bloqueo con desplazamiento lateral",
            "Reto: cerrar línea de ataque"
          ]
        }
      ]
    },
    {
      nombre: "Fase 3 · Juego real",
      temas: [
        {
          id: "rotaciones",
          codigo: "ROT",
          titulo: "Rotaciones",
          nivel: "Avanzado",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duracion: "3h 30m",
          descripcion: "Comprende posiciones, zonas, rotación y orden correcto en cancha.",
          highlights: [
            { tiempo: "00:15:00", titulo: "Zonas de la cancha" },
            { tiempo: "00:52:18", titulo: "Rotación básica" },
            { tiempo: "01:44:00", titulo: "Errores comunes" }
          ],
          capitulos: [],
          recursos: [
            "Dibujar cancha con zonas",
            "Simular rotaciones",
            "Reto: explicar una rotación completa"
          ]
        }
      ]
    }
  ]
};