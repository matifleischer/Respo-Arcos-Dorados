export interface SlideMeta {
  index: number;
  number: string;
  section: string;
  title: string;
  theme: 'red' | 'yellow' | 'white';
}

export const SLIDES_META: SlideMeta[] = [
  { index: 0, number: '01', section: 'Portada', title: 'Arcos Dorados · Reporte 2025', theme: 'red' },
  { index: 1, number: '02', section: 'Agenda', title: 'Nuestro recorrido', theme: 'white' },
  { index: 2, number: '03', section: '01 · La empresa', title: "La mayor franquicia de McDonald's del mundo", theme: 'red' },
  { index: 3, number: '04', section: '01 · Cadena de valor', title: 'Del campo a la bandeja', theme: 'white' },
  { index: 4, number: '05', section: '01 · Contexto sectorial', title: 'Comida rápida: un sector bajo la lupa', theme: 'yellow' },
  { index: 5, number: '06', section: '02 · Materialidad', title: 'Doble materialidad: 16 temas', theme: 'white' },
  { index: 6, number: '07', section: '02 · Hitos 2025', title: '2025 en ocho hitos', theme: 'red' },
  { index: 7, number: '08', section: '03 · Gobernanza', title: '¿Quién decide la sostenibilidad?', theme: 'white' },
  { index: 8, number: '09', section: '03 · Clima', title: 'Metas cumplidas… ¿y ahora qué?', theme: 'red' },
  { index: 9, number: '10', section: '03 · Circularidad', title: 'Packaging: tema top, sin meta', theme: 'yellow' },
  { index: 10, number: '11', section: '03 · DDHH', title: 'Fuerte en trazabilidad, liviano en DDHH', theme: 'white' },
  { index: 11, number: '12', section: '03 · Personas y D&I', title: 'Mayoría femenina… hasta el techo', theme: 'yellow' },
  { index: 12, number: '13', section: '03 · Comunidad', title: 'Mucho alcance, poco impacto medido', theme: 'white' },
  { index: 13, number: '14', section: '03 · Balance', title: 'Lo que muestra, lo que suaviza, lo que calla', theme: 'white' },
  { index: 14, number: '15', section: '04 · Conclusiones', title: 'Sólido en clima y cadena; opaco en gente', theme: 'red' },
  { index: 15, number: '16', section: '04 · Recomendaciones', title: 'Nuestro pedido al equipo de sustentabilidad', theme: 'white' },
  { index: 16, number: '17', section: 'Cierre', title: '¡Gracias! ¿Preguntas?', theme: 'red' },
];
