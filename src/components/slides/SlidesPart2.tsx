import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import {
  SlideFrame,
  SlideKicker,
  AnimatedNumber,
  EASE_OUT_EXPO,
} from '../SlidePrimitives';

export const Slide7: React.FC = () => {
  const topRow = [
    {
      title: '2.500º',
      desc: 'restaurante abierto y Saint Martin como mercado nº 21',
    },
    {
      title: '2 de 2',
      desc: 'metas del bono vinculado a sostenibilidad cumplidas, una con un año de anticipación',
    },
    {
      title: '17.000 t',
      desc: 'de papa con agricultura regenerativa junto a McCain (Argentina)',
    },
    {
      title: 'COP30',
      desc: 'participación en Belém y Alianza por las Nacientes del Pantanal con WWF y el Pacto Global',
    },
  ];

  const bottomRow = [
    {
      title: '10 países',
      desc: 'con programas para jóvenes vulnerables (83% de cobertura continental)',
    },
    {
      title: 'SMETA',
      desc: 'auditorías sociales a proveedores migradas al marco de 4 pilares de SEDEX',
    },
    {
      title: 'IA',
      desc: 'nueva Política Global de Inteligencia Artificial y guía de inclusión de personas con discapacidad',
    },
    {
      title: 'Premio',
      desc: "Global Circle of Excellence de McDonald's por reducir gases refrigerantes",
    },
  ];

  return (
    <SlideFrame variant="red" slideNumber="07" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[42px] flex flex-col justify-between">
        <div>
          <SlideKicker text="02 · DATOS Y ACCIONES DESTACADAS" variant="white-on-red" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[56px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            2025 en ocho hitos
          </motion.h2>
        </div>

        <div className="space-y-[20px]">
          <div className="grid grid-cols-4 gap-[20px]">
            {topRow.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + idx * 0.06, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[22px] p-[24px] h-[206px] flex flex-col justify-start shadow-sm"
              >
                <div className="text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                  {item.title}
                </div>
                <p className="mt-3.5 text-[15px] leading-[1.42] text-[#231F20]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-[20px]">
            {bottomRow.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 + idx * 0.06, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -5 }}
                className="bg-[#FFC72C] rounded-[22px] p-[24px] h-[206px] flex flex-col justify-start shadow-sm"
              >
                <div className="text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#231F20]">
                  {item.title}
                </div>
                <p className="mt-3.5 text-[15px] leading-[1.42] text-[#231F20]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide8: React.FC = () => {
  return (
    <SlideFrame variant="white" slideNumber="08" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[44px] flex flex-col justify-between">
        {/* Header with right-aligned quote */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <SlideKicker text="03 · EJE GOBERNANZA" variant="red-on-light" />
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="mt-4 text-[52px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
            >
              ¿Quién decide la sostenibilidad?
            </motion.h2>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="max-w-[340px] text-right text-[15.5px] italic leading-[1.42] text-[#231F20]/85 pt-5"
          >
            &ldquo;La gobernanza es el sistema mediante el cual la organización toma decisiones&rdquo; · Clase 5
          </motion.blockquote>
        </div>

        {/* 3 Red KPI cards */}
        <div className="grid grid-cols-3 gap-[22px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -4 }}
            className="bg-[#DA291C] rounded-[22px] p-[28px] h-[162px] flex flex-col justify-center text-white shadow-sm"
          >
            <div className="text-[52px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
              7 de 11
            </div>
            <p className="mt-3 text-[16px] font-bold text-white/95">
              directores independientes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -4 }}
            className="bg-[#DA291C] rounded-[22px] p-[28px] h-[162px] flex flex-col justify-center text-white shadow-sm"
          >
            <div className="text-[52px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
              <AnimatedNumber value={27} suffix="%" />
            </div>
            <p className="mt-3 text-[16px] font-bold text-white/95 leading-snug">
              mujeres en el Directorio · 18% en alta dirección
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -4 }}
            className="bg-[#DA291C] rounded-[22px] p-[28px] h-[162px] flex flex-col justify-center text-white shadow-sm"
          >
            <div className="text-[52px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
              0
            </div>
            <p className="mt-3 text-[16px] font-bold text-white/95">
              casos de corrupción confirmados
            </p>
          </motion.div>
        </div>

        {/* Bottom 2 columns: Lo que suma / Lo que falta */}
        <div className="grid grid-cols-2 gap-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.32, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#FFC72C] rounded-[22px] p-[30px] text-[#231F20]"
          >
            <div className="flex items-center gap-2 text-[15px] font-extrabold tracking-[0.08em] uppercase">
              <Check className="w-5 h-5 stroke-[3]" />
              <span>LO QUE SUMA</span>
            </div>
            <ul className="mt-4 space-y-3 text-[16.5px] leading-[1.42] font-medium">
              <li>• VP de Impacto Social reporta al Presidente y al Directorio</li>
              <li>• Comité de Ética y línea ética externa y anónima</li>
              <li>• Nueva Política Global de Inteligencia Artificial</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.38, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#231F20] rounded-[22px] p-[30px] text-white"
          >
            <div className="flex items-center gap-2 text-[15px] font-extrabold tracking-[0.08em] uppercase text-[#FFC72C]">
              <X className="w-5 h-5 stroke-[3]" />
              <span>LO QUE FALTA</span>
            </div>
            <ul className="mt-4 space-y-3 text-[16.5px] leading-[1.42] text-white/95">
              <li>• Presidente del Directorio con rol ejecutivo</li>
              <li>• Sin política formal de remuneración ni ratio de compensación</li>
              <li>• No se relevan las preocupaciones críticas elevadas al Directorio</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide9: React.FC = () => {
  return (
    <SlideFrame variant="red" slideNumber="09" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[42px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · EJE AMBIENTE Y CAMBIO CLIMÁTICO" variant="white-on-red" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            Metas cumplidas… ¿y ahora qué?
          </motion.h2>
        </div>

        <div className="flex gap-[24px] items-stretch h-[420px]">
          {/* Left White Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="w-[655px] shrink-0 bg-white rounded-[24px] p-[34px] text-[#231F20] flex flex-col justify-between shadow-sm"
          >
            <div>
              <p className="text-[13.5px] font-extrabold tracking-[0.08em] uppercase text-[#DA291C]">
                BONO VINCULADO A SOSTENIBILIDAD 2022–2025 · VS 2021
              </p>

              {/* Progress Bar 1 */}
              <div className="mt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-[18px] font-extrabold text-[#231F20]">
                    Alcance 1+2 (absoluto)
                  </span>
                  <span className="text-[20px] font-extrabold text-[#DA291C] tabular-nums">
                    −26,5%
                  </span>
                </div>

                <div className="relative mt-2.5 h-[24px] w-full rounded-full bg-[#EFECE2] overflow-visible">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.85, delay: 0.25, ease: EASE_OUT_EXPO }}
                    style={{ width: '88%', transformOrigin: 'left' }}
                    className="h-full rounded-full bg-[#DA291C]"
                  />
                  {/* Black Goal Marker at 50% (Meta -15% out of -30% scale) */}
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.6 }}
                    style={{ left: '50%' }}
                    className="absolute -top-[5px] -bottom-[5px] w-[3px] bg-[#231F20] rounded-full"
                  />
                </div>
                <p className="mt-2 text-[14px] text-[#231F20]/80">
                  Meta −15% · lograda un año antes (2024)
                </p>
              </div>

              {/* Progress Bar 2 */}
              <div className="mt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-[18px] font-extrabold text-[#231F20]">
                    Intensidad Alcance 3 (tCO₂e/t)
                  </span>
                  <span className="text-[20px] font-extrabold text-[#DA291C] tabular-nums">
                    −16,1%
                  </span>
                </div>

                <div className="relative mt-2.5 h-[24px] w-full rounded-full bg-[#EFECE2] overflow-visible">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.85, delay: 0.35, ease: EASE_OUT_EXPO }}
                    style={{ width: '54%', transformOrigin: 'left' }}
                    className="h-full rounded-full bg-[#DA291C]"
                  />
                  {/* Black Goal Marker at 33.5% (Meta -10%) */}
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.7 }}
                    style={{ left: '33.5%' }}
                    className="absolute -top-[5px] -bottom-[5px] w-[3px] bg-[#231F20] rounded-full"
                  />
                </div>
                <p className="mt-2 text-[14px] text-[#231F20]/80">
                  Meta −10% · línea negra = meta
                </p>
              </div>
            </div>

            {/* Bottom 2 metrics */}
            <div className="flex items-end gap-[56px] pt-2">
              <div>
                <div className="text-[46px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                  <AnimatedNumber value={54} suffix="%" />
                </div>
                <p className="mt-1.5 text-[15px] font-bold text-[#231F20]">
                  energía renovable
                </p>
              </div>
              <div>
                <div className="text-[46px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                  −<AnimatedNumber value={10} suffix="%" />
                </div>
                <p className="mt-1.5 text-[15px] font-bold text-[#231F20]">
                  huella total vs 2024
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-[20px]">
            {/* Top Yellow Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.22, ease: EASE_OUT_EXPO }}
              className="bg-[#FFC72C] rounded-[22px] p-[28px] text-[#231F20] shadow-sm"
            >
              <div className="text-[42px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
                <AnimatedNumber value={5.42} decimals={2} /> M tCO₂e
              </div>

              <div className="mt-4 h-[18px] w-full rounded-full overflow-hidden flex bg-[#231F20]/10">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.38, ease: EASE_OUT_EXPO }}
                  style={{ width: '4.5%', transformOrigin: 'left' }}
                  className="h-full bg-[#231F20]"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.44, ease: EASE_OUT_EXPO }}
                  style={{ width: '95.5%', transformOrigin: 'left' }}
                  className="h-full bg-[#DA291C]"
                />
              </div>

              <p className="mt-3 text-[15.5px] font-bold text-[#231F20]">
                Alcance 1+2: 3,7% · Alcance 3: 96,3%
              </p>
            </motion.div>

            {/* Bottom Dark Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="flex-1 bg-[#231F20] rounded-[22px] p-[28px] text-white flex flex-col justify-center shadow-sm"
            >
              <span className="text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#FFC72C]">
                VACÍOS
              </span>
              <ul className="mt-3.5 space-y-3 text-[16px] leading-[1.4] text-white/95">
                <li>• Sin nueva meta post-2025 ni objetivo validado por SBTi</li>
                <li>• Agua: &ldquo;información insuficiente&rdquo; (GRI 303 y SASB)</li>
                <li>• Residuos totales y % desviado sin cifra consolidada</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide10: React.FC = () => {
  const rightCards = [
    { num: '238', desc: 'restaurantes sin residuos a relleno (Brasil)' },
    { num: '5,2 M l', desc: 'de aceite recuperado · +19%' },
    { num: '1.454 t', desc: 'de cartón recuperado · +55%' },
    { num: '435 t', desc: 'de residuos orgánicos compostados' },
  ];

  return (
    <SlideFrame variant="yellow" slideNumber="10" footerVariant="red">
      <div className="h-full px-[80px] pt-[52px] pb-[34px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · EJE ECONOMÍA CIRCULAR" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-3.5 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Packaging: tema top, sin meta
          </motion.h2>
        </div>

        {/* Middle 2-column grid */}
        <div className="flex gap-[22px] items-stretch h-[310px]">
          {/* Left White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="w-[575px] shrink-0 bg-white rounded-[24px] p-[30px] flex flex-col justify-between shadow-sm"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[48px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                <AnimatedNumber value={48248} /> t
              </span>
              <span className="text-[19px] font-bold text-[#231F20]">
                de envases en 2025
              </span>
            </div>

            {/* Bar 1: 93.2% vs 6.8% */}
            <div>
              <div className="h-[24px] w-full rounded-full overflow-hidden flex bg-[#EFECE2]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.85, delay: 0.28, ease: EASE_OUT_EXPO }}
                  style={{ width: '93.2%', transformOrigin: 'left' }}
                  className="h-full bg-[#DA291C]"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.55, ease: EASE_OUT_EXPO }}
                  style={{ width: '6.8%', transformOrigin: 'left' }}
                  className="h-full bg-[#231F20]"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[15px] font-bold text-[#231F20]">
                <span>93,2% fibras y renovables</span>
                <span>6,8% plástico</span>
              </div>
            </div>

            {/* Bar 2: 21.3% recycled */}
            <div>
              <div className="h-[24px] w-full rounded-full overflow-hidden bg-[#EFECE2]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.38, ease: EASE_OUT_EXPO }}
                  style={{ width: '21.3%', transformOrigin: 'left' }}
                  className="h-full rounded-full bg-[#DA291C]"
                />
              </div>
              <p className="mt-2 text-[15px] font-bold text-[#231F20]">
                21,3% material reciclado (10.268 t), solo sin contacto con alimentos
              </p>
            </div>

            <p className="text-[15px] font-bold text-[#231F20]">
              99,64% de la fibra certificada FSC o PEFC
            </p>
          </motion.div>

          {/* Right 2x2 Red Cards */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-[16px]">
            {rightCards.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.44, delay: 0.18 + idx * 0.06, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -4 }}
                className="bg-[#DA291C] rounded-[20px] p-[22px] text-white flex flex-col justify-center shadow-sm"
              >
                <div className="text-[36px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
                  {item.num}
                </div>
                <p className="mt-2.5 text-[14.5px] leading-[1.35] text-white/95">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Dark Critical Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.42, ease: EASE_OUT_EXPO }}
          className="bg-[#231F20] rounded-[20px] px-[30px] py-[20px] flex items-center gap-[28px]"
        >
          <span className="text-[14.5px] font-extrabold tracking-[0.08em] uppercase text-[#FFC72C] shrink-0">
            MIRADA CRÍTICA
          </span>
          <p className="text-[15.5px] leading-[1.42] text-white/95">
            Es uno de los temas más altos de su matriz, pero no hay meta de plástico ni de reciclabilidad, ni el total de residuos generados. Varios casos son pilotos (ej.: 11 restaurantes) en una red de 2.520.
          </p>
        </motion.div>
      </div>
    </SlideFrame>
  );
};

export const Slide11: React.FC = () => {
  const topKpis = [
    { num: '100%', desc: 'carne de Argentina y Brasil monitoreada por satélite' },
    { num: '+99%', desc: 'cumple la política libre de deforestación' },
    { num: '95,3%', desc: 'huevos libres de jaula (compromiso de 2016)' },
    { num: '74%', desc: 'compras a proveedores locales' },
  ];

  const onuCards = [
    {
      title: 'Compromiso',
      status: 'SÍ',
      desc: "Adhiere a la política de DDHH de McDonald's y exige Código a proveedores",
      bg: 'bg-[#DA291C]',
      badgeBg: 'bg-white text-[#DA291C]',
    },
    {
      title: 'Debida diligencia',
      status: 'PARCIAL',
      desc: 'Auditorías SMETA, pero sin mapa propio de riesgos ni impactos en comunidades (GRI 413-2)',
      bg: 'bg-[#231F20]',
      badgeBg: 'bg-[#FFC72C] text-[#231F20]',
    },
    {
      title: 'Reparación',
      status: 'PARCIAL',
      desc: '300 incidentes de discriminación, 39 planes de remediación: sin detalle de resultados',
      bg: 'bg-[#231F20]',
      badgeBg: 'bg-[#FFC72C] text-[#231F20]',
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="11" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[56px] pb-[44px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · EJE CADENA DE VALOR Y DDHH" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Fuerte en trazabilidad, liviano en DDHH
          </motion.h2>
        </div>

        {/* Top 4 Yellow KPI cards */}
        <div className="grid grid-cols-4 gap-[20px]">
          {topKpis.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 + idx * 0.06, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-[#FFC72C] rounded-[20px] p-[24px] h-[162px] flex flex-col justify-center shadow-sm"
            >
              <div className="text-[46px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C] tabular-nums">
                {item.num}
              </div>
              <p className="mt-2.5 text-[15px] font-bold leading-[1.35] text-[#231F20]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* UN Guiding Principles row */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="text-[13.5px] font-extrabold tracking-[0.1em] uppercase text-[#231F20] mb-3.5"
          >
            PRINCIPIOS RECTORES ONU · CLASE 12
          </motion.p>

          <div className="grid grid-cols-3 gap-[22px]">
            {onuCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.34 + idx * 0.07, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -4 }}
                className={`${card.bg} rounded-[20px] p-[26px] h-[176px] text-white flex flex-col justify-start shadow-sm`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[22px] font-extrabold tracking-[-0.02em]">
                    {card.title}
                  </h3>
                  <span
                    className={`px-3.5 py-1 rounded-full text-[12px] font-extrabold tracking-[0.06em] uppercase shrink-0 ${card.badgeBg}`}
                  >
                    {card.status}
                  </span>
                </div>
                <p className="mt-3.5 text-[15.5px] leading-[1.42] text-white/95">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide12: React.FC = () => {
  const [activeBar, setActiveBar] = useState<number | null>(null);

  const bars = [
    { label: 'Crew', pct: 55, tone: 'red' },
    { label: 'Gerencia rest.', pct: 55, tone: 'red' },
    { label: 'Staff', pct: 54, tone: 'red' },
    { label: 'Alta dirección', pct: 18, tone: 'dark' },
    { label: 'Directorio', pct: 27, tone: 'dark' },
  ];

  const maxBarHeight = 228; // px for ~60% scale

  return (
    <SlideFrame variant="yellow" slideNumber="12" footerVariant="red">
      <div className="h-full px-[80px] pt-[56px] pb-[42px] flex flex-col justify-between">
        <div>
          <SlideKicker text="03 · EJE PERSONAS, DIVERSIDAD E INCLUSIÓN" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Mayoría femenina… hasta el techo
          </motion.h2>
        </div>

        <div className="flex gap-[24px] items-stretch h-[420px]">
          {/* Left White Chart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="w-[685px] shrink-0 bg-white rounded-[24px] p-[32px] flex flex-col justify-between shadow-sm"
          >
            <span className="text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#DA291C]">
              % DE MUJERES POR NIVEL
            </span>

            <div className="flex items-end justify-between gap-4 px-2 pt-4">
              {bars.map((bar, idx) => {
                const heightPx = Math.round((bar.pct / 58) * maxBarHeight);
                const isHovered = activeBar === idx;
                return (
                  <div
                    key={bar.label}
                    onMouseEnter={() => setActiveBar(idx)}
                    onMouseLeave={() => setActiveBar(null)}
                    className="flex-1 flex flex-col items-center cursor-pointer"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + idx * 0.07 }}
                      className={`mb-2.5 text-[22px] font-extrabold tabular-nums transition-transform ${
                        isHovered ? 'scale-110 text-[#DA291C]' : 'text-[#231F20]'
                      }`}
                    >
                      {bar.pct}%
                    </motion.span>

                    <div className="w-full flex justify-center items-end" style={{ height: `${maxBarHeight}px` }}>
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.72,
                          delay: 0.22 + idx * 0.08,
                          ease: EASE_OUT_EXPO,
                        }}
                        style={{
                          height: `${heightPx}px`,
                          transformOrigin: 'bottom',
                        }}
                        className={`w-[100px] rounded-t-[10px] transition-opacity ${
                          bar.tone === 'red' ? 'bg-[#DA291C]' : 'bg-[#231F20]'
                        } ${activeBar !== null && !isHovered ? 'opacity-75' : 'opacity-100'}`}
                      />
                    </div>

                    <span className="mt-3 text-[14.5px] font-bold text-[#231F20] text-center whitespace-nowrap">
                      {bar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-[20px]">
            {/* Top Red KPI card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.22, ease: EASE_OUT_EXPO }}
              className="bg-[#DA291C] rounded-[22px] p-[28px] text-white grid grid-cols-2 gap-4 items-center shadow-sm"
            >
              <div>
                <div className="text-[40px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
                  <AnimatedNumber value={2405} />
                </div>
                <p className="mt-2 text-[14px] font-bold text-white/95 leading-snug">
                  personas con discapacidad
                </p>
              </div>
              <div>
                <div className="text-[40px] font-extrabold leading-none tracking-[-0.03em] tabular-nums">
                  <AnimatedNumber value={91.6} decimals={1} suffix="%" />
                </div>
                <p className="mt-2 text-[14px] font-bold text-white/95 leading-snug">
                  satisfacción crew
                </p>
              </div>
            </motion.div>

            {/* Bottom Dark Vacíos card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="flex-1 bg-[#231F20] rounded-[22px] p-[28px] text-white flex flex-col justify-center shadow-sm"
            >
              <span className="text-[14px] font-extrabold tracking-[0.08em] uppercase text-[#FFC72C]">
                VACÍOS
              </span>
              <ul className="mt-3.5 space-y-2.5 text-[15.5px] leading-[1.38] text-white/95">
                <li>• Brecha salarial de género: &ldquo;confidencial&rdquo;</li>
                <li>• Accidentes sin horas trabajadas: no hay tasas comparables</li>
                <li>• Convenios colectivos: de 0% a 100% según el país</li>
                <li>• Salario por hora y rotación (SASB): sin dato</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};
