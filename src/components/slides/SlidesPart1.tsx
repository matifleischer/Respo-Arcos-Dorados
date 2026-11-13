import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import {
  SlideFrame,
  SlideKicker,
  AnimatedNumber,
  EqualizerBars,
  EASE_OUT_EXPO,
} from '../SlidePrimitives';

interface Slide1Props {
  integrantes: string;
  onUpdateIntegrantes: (value: string) => void;
}

export const Slide1: React.FC<Slide1Props> = ({ integrantes, onUpdateIntegrantes }) => {
  const [editing, setEditing] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <SlideFrame variant="red" footerVariant="none">
      {/* Top-right golden yellow circle */}
      <motion.div
        initial={{ scale: 0.72, opacity: 0, x: 40, y: -40 }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
        className="absolute -top-[88px] -right-[78px] w-[508px] h-[508px] rounded-full bg-[#FFC72C] flex flex-col justify-center pl-[74px] pr-[95px] pt-[56px] text-[#231F20] shadow-2xl"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45, ease: EASE_OUT_EXPO }}
          className="text-[15px] font-extrabold tracking-[0.14em] uppercase"
        >
          REPORTE 2025
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5, ease: EASE_OUT_EXPO }}
          className="text-[58px] font-extrabold leading-[0.98] tracking-[-0.03em] mt-2 mb-3"
        >
          12ª
          <br />
          edición
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45, ease: EASE_OUT_EXPO }}
          className="text-[17.5px] font-medium leading-[1.35] text-[#231F20]/90"
        >
          GRI 2021 + SASB Restaurantes · verificación limitada EY
        </motion.p>
      </motion.div>

      {/* Bottom-right animated golden equalizer bars */}
      <div className="absolute right-[72px] bottom-0">
        <EqualizerBars />
      </div>

      {/* Main left content */}
      <div className="relative z-10 h-full px-[80px] py-[68px] flex flex-col justify-between">
        <div>
          {/* Top metadata row */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-4"
          >
            <span className="inline-flex items-center px-5 py-1.5 rounded-full bg-white text-[#DA291C] text-[13.5px] font-extrabold tracking-[0.1em] uppercase shadow-sm">
              RESPONSABILIDAD SOCIAL EMPRESARIA
            </span>
            <span className="text-[14.5px] font-bold tracking-[0.08em] uppercase text-white/95">
              ITBA · 2026
            </span>
          </motion.div>

          {/* Hero title + Logo Medallion */}
          <div className="mt-[44px] flex items-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE_OUT_EXPO }}
              className="text-[92px] font-extrabold leading-[0.98] tracking-[-0.035em] text-white"
            >
              Arcos
              <br />
              Dorados
            </motion.h1>

            {/* Uploaded Arcos Dorados Logo inside crisp circular medallion */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -14 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 18,
                delay: 0.24,
              }}
              whileHover={{ scale: 1.06, rotate: 4 }}
              className="relative w-[132px] h-[132px] rounded-full bg-white p-2.5 shadow-[0_18px_42px_rgba(0,0,0,0.25)] ring-[5px] ring-[#FFC72C] flex items-center justify-center shrink-0 overflow-hidden"
            >
              {!logoError ? (
                <img
                  src="/assets/aistudio/images_eb0f4837.jpg"
                  alt="Logo Arcos Dorados"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain rounded-full"
                />
              ) : (
                <span className="text-[#FFC72C] font-extrabold text-4xl">M</span>
              )}
            </motion.div>
          </div>

          {/* Yellow accent divider bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28, ease: EASE_OUT_EXPO }}
            style={{ transformOrigin: 'left' }}
            className="w-[104px] h-[8px] rounded-full bg-[#FFC72C] mt-[28px]"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: EASE_OUT_EXPO }}
            className="mt-[28px] max-w-[700px] text-[29px] font-bold leading-[1.28] tracking-[-0.015em] text-white"
          >
            Análisis crítico del Reporte de Impacto Social y Desarrollo Sostenible 2025
          </motion.p>
        </div>

        {/* Bottom presenter block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease: EASE_OUT_EXPO }}
          className="text-white"
        >
          <p className="text-[17.5px] font-bold tracking-[-0.01em]">
            Presentación oral · Análisis crítico de reporte
          </p>
          {editing ? (
            <input
              type="text"
              autoFocus
              value={integrantes}
              onChange={(e) => onUpdateIntegrantes(e.target.value)}
              onBlur={() => setEditing(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Escape') setEditing(false);
              }}
              className="mt-1.5 w-[560px] bg-white/15 border border-white/40 rounded-lg px-3 py-1 text-[17.5px] text-white outline-none focus:ring-2 focus:ring-[#FFC72C]"
            />
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              title="Clic para editar los nombres de los integrantes"
              className="mt-1 text-[17.5px] font-normal text-white/95 hover:text-[#FFC72C] transition-colors text-left cursor-text"
            >
              Integrantes: {integrantes}
            </button>
          )}
        </motion.div>
      </div>
    </SlideFrame>
  );
};

interface Slide2Props {
  onNavigate: (slideIndex: number) => void;
}

export const Slide2: React.FC<Slide2Props> = ({ onNavigate }) => {
  const pillars = [
    {
      num: '01',
      title: 'La empresa',
      desc: 'Escala, cadena de valor y contexto del sector',
      bg: 'bg-[#DA291C]',
      numColor: 'text-[#FFC72C]',
      textColor: 'text-white',
      targetSlide: 2,
    },
    {
      num: '02',
      title: 'Materialidad',
      desc: 'Cómo eligen sus temas y qué destacan de 2025',
      bg: 'bg-[#FFC72C]',
      numColor: 'text-[#DA291C]',
      textColor: 'text-[#231F20]',
      targetSlide: 5,
    },
    {
      num: '03',
      title: 'Análisis por ejes',
      desc: 'Gobernanza, clima, circularidad, DDHH, personas, comunidad',
      bg: 'bg-[#DA291C]',
      numColor: 'text-[#FFC72C]',
      textColor: 'text-white',
      targetSlide: 7,
    },
    {
      num: '04',
      title: 'Conclusiones',
      desc: 'Balance del reporte y recomendaciones',
      bg: 'bg-[#231F20]',
      numColor: 'text-[#FFC72C]',
      textColor: 'text-white',
      targetSlide: 14,
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="02" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[62px] pb-[44px] flex flex-col">
        <div>
          <SlideKicker text="AGENDA" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[56px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Nuestro recorrido
          </motion.h2>
        </div>

        <div className="mt-[46px] grid grid-cols-4 gap-[24px] flex-1 max-h-[380px]">
          {pillars.map((item, idx) => (
            <motion.button
              key={item.num}
              type="button"
              onClick={() => onNavigate(item.targetSlide)}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 + idx * 0.08, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className={`${item.bg} rounded-[24px] p-[28px] flex flex-col justify-between text-left shadow-sm hover:shadow-xl transition-shadow cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-[66px] font-extrabold leading-none tracking-[-0.03em] tabular-nums ${item.numColor}`}>
                  {item.num}
                </span>
                <ChevronRight
                  className={`w-5 h-5 opacity-0 group-hover:opacity-80 group-hover:translate-x-1 transition-all ${item.textColor}`}
                />
              </div>

              <div>
                <h3 className={`text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className={`mt-2.5 text-[15.5px] leading-[1.42] opacity-95 ${item.textColor}`}>
                  {item.desc}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide3: React.FC = () => {
  return (
    <SlideFrame variant="red" slideNumber="03" footerVariant="yellow">
      <div className="h-full px-[80px] py-[56px] flex items-center gap-[56px]">
        {/* Left column */}
        <div className="w-[415px] shrink-0">
          <SlideKicker text="01 · LA EMPRESA" variant="white-on-red" />
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-5 text-[52px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            La mayor franquicia de McDonald&apos;s del mundo
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.2, ease: EASE_OUT_EXPO }}
            style={{ transformOrigin: 'left' }}
            className="w-[88px] h-[7px] rounded-full bg-[#FFC72C] my-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: EASE_OUT_EXPO }}
            className="text-[19px] leading-[1.46] text-white/95"
          >
            Opera la marca en América Latina y el Caribe en 3 divisiones: Brasil, Sudamérica (SLAD) y Centroamérica y Caribe (NOLAD).
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="mt-5 text-[19px] leading-[1.46] text-white/95"
          >
            Cotiza en Nueva York (NYSE: ARCO) desde 2011.
          </motion.p>
        </div>

        {/* Right column 2x2 KPIs + Menu banner */}
        <div className="flex-1 flex flex-col gap-[20px]">
          <div className="grid grid-cols-2 gap-[20px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.14, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[22px] p-[28px] h-[182px] flex flex-col justify-center shadow-sm"
            >
              <div className="text-[58px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                <AnimatedNumber value={2520} />
              </div>
              <p className="mt-3 text-[16px] font-bold text-[#231F20]">
                restaurantes · +92 vs 2024
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.2, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[22px] p-[28px] h-[182px] flex flex-col justify-center shadow-sm"
            >
              <div className="text-[58px] font-extrabold leading-none tracking-[-0.03em] text-[#DA291C]">
                <AnimatedNumber value={21} />
              </div>
              <p className="mt-3 text-[16px] font-bold text-[#231F20] leading-snug">
                países y territorios · nuevo: St. Martin
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.26, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-[#FFC72C] rounded-[22px] p-[28px] h-[182px] flex flex-col justify-center shadow-sm"
            >
              <div className="text-[58px] font-extrabold leading-none tracking-[-0.03em] text-[#231F20]">
                <AnimatedNumber value={96782} />
              </div>
              <p className="mt-3 text-[16px] font-bold text-[#231F20] leading-snug">
                colaboradores directos · 53% menores de 24
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.32, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -4 }}
              className="bg-[#FFC72C] rounded-[22px] p-[28px] h-[182px] flex flex-col justify-center shadow-sm"
            >
              <div className="text-[58px] font-extrabold leading-none tracking-[-0.03em] text-[#231F20]">
                <AnimatedNumber value={6000} />
              </div>
              <p className="mt-3 text-[16px] font-bold text-[#231F20] leading-snug">
                millones de USD en ventas · +4,7%
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.38, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -2 }}
            className="bg-[#231F20] rounded-[20px] px-[30px] py-[22px] flex items-center gap-[28px]"
          >
            <span className="text-[16px] font-extrabold tracking-[0.08em] text-[#FFC72C] shrink-0">
              MENÚ
            </span>
            <p className="text-[16.5px] leading-[1.4] text-white/95">
              Hamburguesas, pollo, Cajita Feliz, bebidas, postres y McCafé · salón, AutoMac, delivery y app
            </p>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide4: React.FC = () => {
  const steps = [
    {
      label: 'ALIMENTOS',
      value: '205',
      desc: 'proveedores · 267 plantas. Carne, pollo, papa, pan, café, lácteos',
      bg: 'bg-[#FFC72C]',
      labelColor: 'text-[#231F20]',
      valueColor: 'text-[#DA291C]',
      descColor: 'text-[#231F20]',
    },
    {
      label: 'PACKAGING',
      value: '62',
      desc: 'proveedores de papel y envases · 65 plantas',
      bg: 'bg-[#FFC72C]',
      labelColor: 'text-[#231F20]',
      valueColor: 'text-[#DA291C]',
      descColor: 'text-[#231F20]',
    },
    {
      label: 'LOGÍSTICA',
      value: 'CD',
      desc: 'centros de distribución de socios (Martin Brower, Axionlog)',
      bg: 'bg-[#FFC72C]',
      labelColor: 'text-[#231F20]',
      valueColor: 'text-[#DA291C]',
      descColor: 'text-[#231F20]',
    },
    {
      label: 'RESTAURANTES',
      value: '2.520',
      desc: 'propios y sub-franquiciados',
      bg: 'bg-[#DA291C]',
      labelColor: 'text-white',
      valueColor: 'text-white',
      descColor: 'text-white/95',
    },
    {
      label: 'CLIENTES',
      value: '360°',
      desc: 'salón, AutoMac, delivery, app y programa de lealtad',
      bg: 'bg-[#DA291C]',
      labelColor: 'text-white',
      valueColor: 'text-white',
      descColor: 'text-white/95',
    },
  ];

  return (
    <SlideFrame variant="white" slideNumber="04" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[58px] pb-[40px] flex flex-col justify-between">
        <div>
          <SlideKicker text="01 · CADENA DE VALOR" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[56px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Del campo a la bandeja
          </motion.h2>
        </div>

        {/* 5 horizontal steps with chevrons */}
        <div className="flex items-center justify-between gap-[10px]">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.14 + idx * 0.08, ease: EASE_OUT_EXPO }}
                whileHover={{ y: -5 }}
                className={`flex-1 h-[258px] ${step.bg} rounded-[22px] p-[22px] flex flex-col justify-start shadow-sm`}
              >
                <span className={`text-[12.5px] font-extrabold tracking-[0.08em] uppercase ${step.labelColor}`}>
                  {step.label}
                </span>
                <div className={`mt-3 text-[44px] font-extrabold leading-none tracking-[-0.03em] tabular-nums ${step.valueColor}`}>
                  {step.value}
                </div>
                <p className={`mt-4 text-[14.5px] leading-[1.42] ${step.descColor}`}>
                  {step.desc}
                </p>
              </motion.div>

              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.22 + idx * 0.08 }}
                  className="text-[#DA291C] shrink-0"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3.2]" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom 2 dark highlight cards */}
        <div className="grid grid-cols-2 gap-[22px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.42, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#231F20] rounded-[20px] px-[30px] py-[24px] flex items-center gap-[24px]"
          >
            <span className="text-[48px] font-extrabold leading-none tracking-[-0.03em] text-[#FFC72C] tabular-nums shrink-0">
              <AnimatedNumber value={74} suffix="%" />
            </span>
            <p className="text-[16px] leading-[1.42] text-white/95">
              de las compras van a proveedores locales (Brasil 82%, SLAD 73%, NOLAD 63%)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.48, ease: EASE_OUT_EXPO }}
            whileHover={{ y: -3 }}
            className="bg-[#231F20] rounded-[20px] px-[30px] py-[24px] flex items-center gap-[24px]"
          >
            <span className="text-[48px] font-extrabold leading-none tracking-[-0.03em] text-[#FFC72C] tabular-nums shrink-0">
              <AnimatedNumber value={96} suffix="%" />
            </span>
            <p className="text-[16px] leading-[1.42] text-white/95">
              de la huella de carbono está en la cadena (Alcance 3): el impacto real está aguas arriba
            </p>
          </motion.div>
        </div>
      </div>
    </SlideFrame>
  );
};

export const Slide5: React.FC = () => {
  const cards = [
    {
      num: '1',
      title: 'Ganadería y deforestación',
      desc: 'La carne vacuna concentra emisiones y riesgo en Chaco, Amazonia y Cerrado.',
    },
    {
      num: '2',
      title: 'Packaging y residuos',
      desc: '48.248 t de envases al año: un impacto muy visible para el cliente.',
    },
    {
      num: '3',
      title: 'Nutrición y publicidad infantil',
      desc: '10.810 reclamos por información de productos y 111 por marketing en 2025.',
    },
    {
      num: '4',
      title: 'Empleo joven y rotación',
      desc: 'Primer empleo masivo en una región con ~20% de desempleo juvenil.',
    },
  ];

  return (
    <SlideFrame variant="yellow" slideNumber="05" footerVariant="red">
      <div className="h-full px-[80px] pt-[58px] pb-[44px] flex flex-col justify-between">
        {/* Top row with headline + 2 dark ESG badges */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <SlideKicker text="01 · CONTEXTO SECTORIAL" variant="red-on-light" />
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="mt-4 text-[52px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
            >
              Comida rápida:
              <br />
              un sector bajo la lupa
            </motion.h2>
          </div>

          <div className="flex items-center gap-[16px] pt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.16, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -3 }}
              className="bg-[#231F20] rounded-[18px] px-[24px] py-[18px] min-w-[196px]"
            >
              <div className="text-[38px] font-extrabold leading-none text-[#FFC72C] tabular-nums">
                <AnimatedNumber value={27.8} decimals={1} />
              </div>
              <p className="mt-2 text-[14px] font-bold text-white">Riesgo ESG · moderado</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.22, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -3 }}
              className="bg-[#231F20] rounded-[18px] px-[24px] py-[18px] min-w-[152px]"
            >
              <div className="text-[38px] font-extrabold leading-none text-[#FFC72C]">BB</div>
              <p className="mt-2 text-[14px] font-bold text-white">Calificación ESG</p>
            </motion.div>
          </div>
        </div>

        {/* 4 White cards */}
        <div className="grid grid-cols-4 gap-[22px]">
          {cards.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.18 + idx * 0.08, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[22px] p-[26px] h-[330px] flex flex-col justify-start shadow-sm"
            >
              <div className="w-[40px] h-[40px] rounded-full bg-[#DA291C] text-white text-[18px] font-extrabold flex items-center justify-center shrink-0">
                {card.num}
              </div>
              <h3 className="mt-5 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#231F20]">
                {card.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.46] text-[#231F20]/85">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
};

interface MatrixTopic {
  id: string;
  label: string;
  x: number; // 0 to 100 (Financial Risk)
  y: number; // 0 to 100 (Impact)
  tone: 'red' | 'dark' | 'yellow';
  note: string;
}

const MATRIX_TOPICS: MatrixTopic[] = [
  { id: 'etica', label: 'Ética', x: 76, y: 95, tone: 'red', note: 'Cuadrante prioritario · Capítulo breve en el reporte' },
  { id: 'packaging', label: 'Packaging y residuos', x: 57, y: 90, tone: 'red', note: 'Cuadrante prioritario · Sin meta cuantitativa de reducción' },
  { id: 'alimentos', label: 'Alimentos seguros', x: 71.5, y: 81.5, tone: 'red', note: 'Cuadrante prioritario · Foco operativo central' },
  { id: 'ddhh', label: 'Derechos humanos', x: 64, y: 72, tone: 'red', note: 'Cuadrante prioritario · Reporte acotado' },
  { id: 'salud', label: 'Salud y seguridad', x: 70, y: 65, tone: 'red', note: 'Cuadrante prioritario · Faltan tasas comparables' },
  { id: 'recursos', label: 'Gestión de recursos', x: 33.5, y: 73, tone: 'dark', note: 'Alto impacto percibido · Riesgo financiero medio' },
  { id: 'abastecimiento', label: 'Abastecimiento', x: 33.5, y: 60.5, tone: 'dark', note: 'Cadena de proveedores y compras locales' },
  { id: 'comunidad', label: 'Comunidad', x: 17, y: 53.5, tone: 'dark', note: 'Inversión social y programas territoriales' },
  { id: 'empleo', label: 'Empleo joven', x: 8, y: 47, tone: 'dark', note: 'Primer empleo en la región' },
  { id: 'marketing', label: 'Marketing', x: 81, y: 43.5, tone: 'dark', note: 'Publicidad infantil e información nutricional' },
  { id: 'cultura', label: 'Cultura interna', x: 47.5, y: 36.5, tone: 'dark', note: 'Satisfacción y ambiente laboral' },
  { id: 'ganaderia', label: 'Ganadería y bienestar animal', x: 27.5, y: 24.5, tone: 'dark', note: 'Trazabilidad satelital y huevos libres de jaula' },
  { id: 'ciber', label: 'Ciberseguridad', x: 75.5, y: 24.5, tone: 'dark', note: 'Riesgo financiero relevante · Nueva política de IA' },
  { id: 'clima', label: 'Acción por el clima', x: 4.2, y: 18, tone: 'yellow', note: 'Menor prioridad en matriz · Pero con metas de bono y más datos' },
  { id: 'diversidad', label: 'Diversidad e inclusión', x: 16, y: 11, tone: 'yellow', note: 'Menor prioridad en matriz · Pero uno de los capítulos más extensos' },
  { id: 'innovacion', label: 'Innovación de productos', x: 47.5, y: 5.5, tone: 'dark', note: 'Menor prioridad relativa en la matriz 2024' },
];

export const Slide6: React.FC = () => {
  const [hoveredTopic, setHoveredTopic] = useState<MatrixTopic | null>(null);

  return (
    <SlideFrame variant="white" slideNumber="06" footerVariant="yellow">
      <div className="h-full px-[80px] pt-[52px] pb-[32px] flex flex-col justify-between">
        <div>
          <SlideKicker text="02 · MATERIALIDAD" variant="red-on-light" />
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-3 text-[54px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#231F20]"
          >
            Doble materialidad: 16 temas
          </motion.h2>
        </div>

        <div className="mt-4 flex gap-[44px] items-start flex-1">
          {/* Left column */}
          <div className="w-[420px] shrink-0 flex flex-col justify-between h-[445px]">
            <div className="space-y-5 pt-2">
              {[
                {
                  num: '1',
                  bold: 'Método (2024):',
                  text: 'impacto en personas, ambiente y economía × riesgo financiero. GRI, con la CSRD como referencia',
                },
                {
                  num: '2',
                  bold: 'Actores:',
                  text: '+12.400 encuestas a colaboradores, clientes, proveedores, franquicias y comunidad, más inversores',
                },
                {
                  num: '3',
                  bold: 'Validación:',
                  text: 'Equipo de Liderazgo. Sin cambios en 2025',
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.42, delay: 0.14 + idx * 0.08, ease: EASE_OUT_EXPO }}
                  className="flex items-start gap-4"
                >
                  <span className="w-[34px] h-[34px] rounded-full bg-[#FFC72C] text-[#231F20] font-extrabold text-[15px] flex items-center justify-center shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <p className="text-[16px] leading-[1.45] text-[#231F20]">
                    <strong className="font-extrabold">{item.bold}</strong> {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.36, ease: EASE_OUT_EXPO }}
              className="bg-[#231F20] rounded-[20px] p-[22px] text-white"
            >
              <span className="text-[12.5px] font-extrabold tracking-[0.1em] uppercase text-[#FFC72C]">
                MIRADA CRÍTICA: COHERENCIA
              </span>
              <p className="mt-2 text-[15.5px] leading-[1.46] text-white/95">
                Clima y D&amp;I quedan en el cuadrante de menor prioridad… y son los capítulos con más datos. DDHH y ética, arriba de todo, son los más escuetos.
              </p>
            </motion.div>
          </div>

          {/* Right column: Interactive Matrix Chart */}
          <div className="flex-1 flex flex-col">
            <div className="relative w-full h-[412px] border-l-[2.5px] border-b-[2.5px] border-[#231F20] bg-white">
              {/* Priority top-right quadrant background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FDF3D7]"
              />

              {/* Quadrant crosshair lines */}
              <div className="absolute left-0 right-0 top-[50%] h-[1px] bg-[#E2DDD0]" />
              <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-[#E2DDD0]" />

              {/* Axis labels */}
              <span className="absolute top-2.5 left-3 text-[12px] font-extrabold tracking-[0.06em] uppercase text-[#5C5852]">
                ↑ IMPACTO (GRUPOS DE INTERÉS)
              </span>
              <span className="absolute bottom-2.5 right-3 text-[12px] font-extrabold tracking-[0.06em] uppercase text-[#5C5852]">
                RIESGO FINANCIERO (INVERSORES) →
              </span>

              {/* 16 plotted topics */}
              {MATRIX_TOPICS.map((topic, idx) => {
                const isHovered = hoveredTopic?.id === topic.id;
                const dotClass =
                  topic.tone === 'red'
                    ? 'bg-[#DA291C]'
                    : topic.tone === 'yellow'
                    ? 'bg-[#FFC72C] border-2 border-[#231F20]'
                    : 'bg-[#231F20]';

                return (
                  <motion.div
                    key={topic.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + idx * 0.025,
                    }}
                    onMouseEnter={() => setHoveredTopic(topic)}
                    onMouseLeave={() => setHoveredTopic(null)}
                    style={{
                      left: `${topic.x}%`,
                      bottom: `${topic.y}%`,
                    }}
                    className="absolute -translate-x-1/2 translate-y-1/2 flex items-center gap-2 cursor-pointer group z-10"
                  >
                    <motion.span
                      animate={{ scale: isHovered ? 1.35 : 1 }}
                      className={`w-[13px] h-[13px] rounded-full shrink-0 shadow-xs ${dotClass}`}
                    />
                    <span
                      className={`whitespace-nowrap text-[12.5px] leading-none transition-colors ${
                        topic.tone === 'red' || topic.tone === 'yellow'
                          ? 'font-extrabold text-[#231F20]'
                          : 'font-medium text-[#231F20]/90'
                      } ${isHovered ? 'text-[#DA291C]' : ''}`}
                    >
                      {topic.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Interactive hover insight pill */}
              {hoveredTopic && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-3 right-3 z-20 max-w-[290px] bg-[#231F20] text-white px-3.5 py-2.5 rounded-xl shadow-lg pointer-events-none"
                >
                  <p className="text-[12.5px] font-extrabold text-[#FFC72C]">{hoveredTopic.label}</p>
                  <p className="text-[11.5px] leading-snug text-white/90 mt-0.5">{hoveredTopic.note}</p>
                </motion.div>
              )}
            </div>

            <p className="mt-2.5 text-[12px] text-[#5C5852]">
              Posiciones aproximadas, redibujadas de la matriz del reporte (p. 6). En rojo, el cuadrante prioritario.
            </p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
};
