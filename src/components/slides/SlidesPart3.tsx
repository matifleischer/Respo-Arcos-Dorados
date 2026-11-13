import React from 'react';
import { motion } from 'motion/react';
import {
  SlideFrame,
  SlideKicker,
  AnimatedNumber,
  EqualizerBars,
  EASE_OUT_EXPO,
} from '../SlidePrimitives';

export const Slide13: React.FC = () => {
  const kpis = [
    {
      title: <AnimatedNumber value={351947} />,
      desc: 'oportunidades de empleo y formación para jóvenes',
    },
    {
      title: 'USD 8,4 M',
      desc: 'donados en Gran Día (2,2 M Big Mac)',
    },
    {
      title: <AnimatedNumber value={286761} />,
      desc: 'visitas a Puertas Abiertas',
    },
    {
      title: '4 de 5',
      desc: 'objetivos de la Cajita Feliz alcanzados',
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="13" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[44px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · EJE COMUNIDAD Y CONSUMIDORES" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Mucho alcance, poco impacto medido
          </motion.h2>
        </div>

        {/* Top 4 Red KPI cards */}
        <div className="grid grid-cols-4 gap-[20px]">
          {kpis.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 + idx * 0.06, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-[#DA291C] rounded-[20px] p-[24px] h-[160px] text-white flex flex-col justify-center shadow-sm"
            >
              <div className="text-[40px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
                {item.title}
              </div>
              <p className="mt-3 text-[14.5px] font-bold leading-[1.35] text-white/95">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 columns */}
        <div className="grid grid-cols-2 gap-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.3, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#FFC72C] rounded-[22px] p-[30px] h-[226px] text-[#231F20] flex flex-col justify-start"
          >
            <span className="text-[14px] font-extrabold tracking-[0.08em] uppercase">
              COMUNIDAD · INVERSIÓN SOCIAL PRIVADA
            </span>
            <ul className="mt-4 space-y-3.5 text-[16.5px] leading-[1.42]">
              <li>
                • Se reportan <strong className="font-extrabold">actividades</strong> (inscriptos, voluntarios, horas), no resultados: ¿cuántos jóvenes siguen empleados?
              </li>
              <li>
                • Impactos negativos en comunidades (GRI 413-2): &ldquo;no se evaluaron&rdquo;
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.36, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#231F20] rounded-[22px] p-[30px] h-[226px] text-white flex flex-col justify-start"
          >
            <span className="text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#FFC72C]">
              CONSUMIDORES
            </span>
            <ul className="mt-4 space-y-3.5 text-[16.5px] leading-[1.42] text-white/95">
              <li>• 10.810 reclamos por información de productos y etiquetado</li>
              <li>• Ingresos de opciones saludables y publicidad a niños (SASB): no se divulgan</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide14: React.FC = () => {
  const columns = [
    {
      title: 'Fortalezas',
      bg: 'bg-[#FFC72C]',
      titleColor: 'text-[#231F20]',
      barColor: 'bg-[#DA291C]',
      textColor: 'text-[#231F20]',
      items: [
        'GRI 2021 + SASB, con verificación externa de EY',
        '12 ediciones: series comparables desde 2021',
        'Metas climáticas con plazo, atadas a un bono',
        'Trazabilidad satelital de la carne',
      ],
    },
    {
      title: 'Debilidades',
      bg: 'bg-[#DA291C]',
      titleColor: 'text-white',
      barColor: 'bg-[#FFC72C]',
      textColor: 'text-white/95',
      items: [
        'Tono de celebración ("Hitos que vale la pena celebrar"): riesgo de greenwashing',
        "Varias políticas clave son de McDonald's, no propias",
        'Mide actividades más que resultados',
        'Materialidad de 2024, sin actualizar',
      ],
    },
    {
      title: 'Vacíos',
      bg: 'bg-[#231F20]',
      titleColor: 'text-[#FFC72C]',
      barColor: 'bg-[#FFC72C]',
      textColor: 'text-white/95',
      items: [
        'Agua y residuos totales',
        'Brecha salarial y ratio de compensación',
        'Tasas de accidentes laborales',
        'Impactos negativos en comunidades',
        'Metas climáticas después de 2025',
      ],
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="14" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[42px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · BALANCE DEL REPORTE" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Lo que muestra, lo que suaviza, lo que calla
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-[22px]">
          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.14 + idx * 0.08, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className={`${col.bg} rounded-[24px] p-[32px] h-[428px] flex flex-col justify-start shadow-sm`}
            >
              <h3 className={`text-[30px] font-extrabold leading-none tracking-[-0.02em] ${col.titleColor}`}>
                {col.title}
              </h3>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, delay: 0.25 + idx * 0.08, ease: EASE_OUT_EXPO }}
                style={{ transformOrigin: 'left' }}
                className={`w-[50px] h-[6px] rounded-full ${col.barColor} my-5`}
              />

              <div className={`space-y-4 text-[17px] leading-[1.42] ${col.textColor}`}>
                {col.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide15: React.FC = () => {
  const criteria = [
    {
      name: 'Calidad',
      sub: 'Estándares, verificación, series',
      score: 4,
    },
    {
      name: 'Coherencia',
      sub: 'Temas materiales vs. datos',
      score: 3,
    },
    {
      name: 'Profundidad',
      sub: 'Resultados e impactos reales',
      score: 2,
    },
  ];

  const learnings = [
    'Lo que se declara "confidencial" también comunica.',
    'Cumplir una meta abre la pregunta: ¿cuál es la próxima?',
    'Contar personas alcanzadas no es medir impacto.',
  ];

  return (
    <SlideFrame variant="red" slideNumber="15" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[54px] pb-[44px] flex flex-col justify-between">
        <div>
          <SlideKicker text="04 · CONCLUSIONES" variant="white-on-red" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 max-w-[1040px] text-[50px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
          >
            Sólido en clima y cadena; opaco cuando el tema es la gente
          </motion.h2>
        </div>

        <div className="flex gap-[28px] items-stretch h-[375px]">
          {/* Left White Evaluation Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="w-[565px] shrink-0 bg-white rounded-[24px] px-[34px] py-[28px] text-[#231F20] flex flex-col justify-between shadow-sm"
          >
            <div className="divide-y divide-[#EAE5D9]">
              {criteria.map((row, rowIdx) => (
                <div
                  key={row.name}
                  className={`flex items-center justify-between ${
                    rowIdx === 0 ? 'pb-5 pt-1' : rowIdx === 1 ? 'py-5' : 'pt-5 pb-3'
                  }`}
                >
                  <div>
                    <h3 className="text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-[#231F20]">
                      {row.name}
                    </h3>
                    <p className="mt-1 text-[14.5px] text-[#231F20]/80">{row.sub}</p>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    {[1, 2, 3, 4, 5].map((dotIdx) => {
                      const filled = dotIdx <= row.score;
                      return (
                        <motion.span
                          key={dotIdx}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 320,
                            damping: 20,
                            delay: 0.25 + rowIdx * 0.1 + dotIdx * 0.045,
                          }}
                          className={`w-[24px] h-[24px] rounded-full ${
                            filled ? 'bg-[#DA291C]' : 'bg-[#EAE5D9]'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[13.5px] text-[#5C5852]">Evaluación del grupo</p>
          </motion.div>

          {/* Right APRENDIZAJES Stack */}
          <div className="flex-1 flex flex-col justify-start">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[14.5px] font-extrabold tracking-[0.1em] uppercase text-white mb-3.5"
            >
              APRENDIZAJES
            </motion.span>

            <div className="flex flex-col gap-[16px] flex-1">
              {learnings.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.22 + idx * 0.08, ease: EASE_OUT_EXPO }}
                  whileHover={{ x: 4 }}
                  className="flex-1 bg-[#FFC72C] rounded-[20px] px-[28px] py-[20px] flex items-center text-[#231F20] shadow-sm"
                >
                  <p className="text-[19px] font-extrabold leading-[1.32] tracking-[-0.015em]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide16: React.FC = () => {
  const recommendations = [
    {
      num: '01',
      title: 'Nueva meta climática a 2030',
      desc: 'Con base científica y foco en Alcance 3, como continuidad del bono',
      tone: 'yellow',
    },
    {
      num: '02',
      title: 'Medir agua y residuos',
      desc: 'Cerrar los indicadores GRI 303 y SASB que hoy figuran sin datos',
      tone: 'yellow',
    },
    {
      num: '03',
      title: 'Transparencia laboral',
      desc: 'Brecha salarial, ratio de compensación y tasas de accidentes',
      tone: 'yellow',
    },
    {
      num: '04',
      title: 'Debida diligencia propia en DDHH',
      desc: 'Riesgos prioritarios y resultados de los planes de remediación',
      tone: 'red',
    },
    {
      num: '05',
      title: 'Medir impacto, no alcance',
      desc: 'Ej.: jóvenes que siguen empleados a 12 meses del programa',
      tone: 'red',
    },
    {
      num: '06',
      title: 'Materialidad y tono',
      desc: 'Actualizarla con criterios visibles y contar desafíos, no solo hitos',
      tone: 'red',
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="16" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[42px] flex flex-col justify-between">
        <div>
          <SlideKicker text="04 · RECOMENDACIONES" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Nuestro pedido al equipo de sustentabilidad
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-[20px]">
          {recommendations.map((rec, idx) => {
            const isYellow = rec.tone === 'yellow';
            return (
              <motion.div
                key={rec.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 + idx * 0.06, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -5 }}
                className={`${
                  isYellow ? 'bg-[#FFC72C] text-[#231F20]' : 'bg-[#DA291C] text-white'
                } rounded-[22px] p-[26px] h-[204px] flex flex-col justify-start shadow-sm`}
              >
                <span
                  className={`text-[36px] font-extrabold leading-none tracking-[-0.03em] tabular-nums ${
                    isYellow ? 'text-[#DA291C]' : 'text-[#FFC72C]'
                  }`}
                >
                  {rec.num}
                </span>
                <h3 className="mt-3 text-[20.5px] font-extrabold leading-[1.2] tracking-[-0.015em]">
                  {rec.title}
                </h3>
                <p
                  className={`mt-2 text-[15px] leading-[1.4] ${
                    isYellow ? 'text-[#231F20]/90' : 'text-white/95'
                  }`}
                >
                  {rec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide17: React.FC = () => {
  return (
    <SlideFrame variant="red" footerVariant="none">
      {/* Bottom-left large golden yellow circle */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, x: -50, y: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
        className="absolute -bottom-[148px] -left-[86px] w-[524px] h-[524px] rounded-full bg-[#FFC72C]"
      />

      {/* Bottom-right animated golden equalizer bars (5 bars) */}
      <div className="absolute right-[72px] bottom-0">
        <EqualizerBars count={5} />
      </div>

      {/* Center-right text block */}
      <div className="relative z-10 h-full pl-[478px] pr-[120px] pt-[148px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="text-[112px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
        >
          ¡Gracias!
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.45, delay: 0.25, ease: EASE_OUT_EXPO }}
          style={{ transformOrigin: 'left' }}
          className="w-[104px] h-[8px] rounded-full bg-[#FFC72C] my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.3, ease: EASE_OUT_EXPO }}
          className="text-[38px] font-extrabold tracking-[-0.02em] text-white"
        >
          ¿Preguntas?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.38, ease: EASE_OUT_EXPO }}
          className="mt-7 max-w-[490px] text-[17.5px] leading-[1.48] text-white/95"
        >
          Fuente: Arcos Dorados, Reporte de Impacto Social y Desarrollo Sostenible 2025 (12ª edición) e Índice GRI &amp; SASB.
        </motion.p>
      </div>
    </SlideFrame>
  );
};
