import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react';
import { SLIDES_META } from './data/slidesMeta';
import { EASE_OUT_EXPO } from './components/SlidePrimitives';
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
} from './components/slides/SlidesPart1';
import {
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
} from './components/slides/SlidesPart2';
import {
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
} from './components/slides/SlidesPart3';

const TOTAL_SLIDES = 17;
const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 48 : -48,
    scale: 0.985,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -48 : 48,
    scale: 0.985,
  }),
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [integrantes, setIntegrantes] = useState('[NOMBRE 1] · [NOMBRE 2] · [NOMBRE 3]');

  const stageContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Compute responsive scale to fit 1280x720 perfectly inside available stage area
  useEffect(() => {
    const el = stageContainerRef.current;
    if (!el) return;

    const updateScale = () => {
      const rect = el.getBoundingClientRect();
      const padX = isFullscreen ? 0 : 28;
      const padY = isFullscreen ? 0 : 20;
      const availW = Math.max(rect.width - padX, 320);
      const availH = Math.max(rect.height - padY, 180);
      const nextScale = Math.min(availW / BASE_WIDTH, availH / BASE_HEIGHT);
      setScale(nextScale);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    window.addEventListener('resize', updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [isFullscreen]);

  // Track fullscreen state
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, nextIndex));
      if (clamped === currentSlide) {
        setIsGridOpen(false);
        return;
      }
      setDirection(clamped > currentSlide ? 1 : -1);
      setCurrentSlide(clamped);
      setIsGridOpen(false);
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((s) => s + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore if blocked by iframe permissions
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'Escape' && isGridOpen) {
        setIsGridOpen(false);
        return;
      }
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsGridOpen((v) => !v);
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
        return;
      }
      if (isGridOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGridOpen, nextSlide, prevSlide, goToSlide, toggleFullscreen]);

  const renderSlide = (index: number) => {
    switch (index) {
      case 0:
        return (
          <Slide1
            integrantes={integrantes}
            onUpdateIntegrantes={setIntegrantes}
          />
        );
      case 1:
        return <Slide2 onNavigate={goToSlide} />;
      case 2:
        return <Slide3 />;
      case 3:
        return <Slide4 />;
      case 4:
        return <Slide5 />;
      case 5:
        return <Slide6 />;
      case 6:
        return <Slide7 />;
      case 7:
        return <Slide8 />;
      case 8:
        return <Slide9 />;
      case 9:
        return <Slide10 />;
      case 10:
        return <Slide11 />;
      case 11:
        return <Slide12 />;
      case 12:
        return <Slide13 />;
      case 13:
        return <Slide14 />;
      case 14:
        return <Slide15 />;
      case 15:
        return <Slide16 />;
      case 16:
        return <Slide17 />;
      default:
        return null;
    }
  };

  const activeMeta = SLIDES_META[currentSlide];

  return (
    <MotionConfig reducedMotion="user">
      <div className="h-screen w-screen bg-[#141210] flex flex-col overflow-hidden">
        {/* Main responsive 16:9 slide stage */}
        <main
          ref={stageContainerRef}
          className="relative flex-1 flex items-center justify-center overflow-hidden"
        >
          <div
            style={{
              width: `${BASE_WIDTH}px`,
              height: `${BASE_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
            }}
            className="relative shrink-0 rounded-[12px] overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.34,
                  ease: EASE_OUT_EXPO,
                }}
                className="w-full h-full"
              >
                {renderSlide(currentSlide)}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Bottom presenter control bar */}
        <footer className="h-[58px] px-6 bg-[#1B1815] border-t border-white/10 flex items-center justify-between gap-6 shrink-0 z-30">
          {/* Left: Slide navigation arrows & counter */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Diapositiva anterior"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="px-2 text-[13px] font-bold tracking-wide text-white/90 tabular-nums whitespace-nowrap">
              {activeMeta.number} / {TOTAL_SLIDES}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              disabled={currentSlide === TOTAL_SLIDES - 1}
              aria-label="Siguiente diapositiva"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Center: Interactive 17-segment progress track + active section label */}
          <div className="flex-1 max-w-[680px] flex flex-col items-center gap-1.5 min-w-0">
            <div className="flex items-center gap-2 text-[12px] text-white/75 truncate max-w-full">
              <span className="font-bold text-[#FFC72C] whitespace-nowrap">
                {activeMeta.section}
              </span>
              <span aria-hidden="true">·</span>
              <span className="truncate text-white/85">{activeMeta.title}</span>
            </div>

            <div className="w-full flex items-center gap-1">
              {SLIDES_META.map((slide) => {
                const isActive = slide.index === currentSlide;
                const isVisited = slide.index < currentSlide;
                return (
                  <button
                    key={slide.index}
                    type="button"
                    onClick={() => goToSlide(slide.index)}
                    title={`${slide.number} · ${slide.title}`}
                    aria-label={`Ir a diapositiva ${slide.number}: ${slide.title}`}
                    className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FFC72C] scale-y-125'
                        : isVisited
                        ? 'bg-[#DA291C]'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right: Grid overview & Fullscreen */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsGridOpen(true)}
              className="px-3 py-1.5 rounded-lg text-[12.5px] font-semibold text-white/90 hover:bg-white/10 flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Vista general (G)"
            >
              <LayoutGrid className="w-4 h-4 text-[#FFC72C]" />
              <span className="hidden sm:inline">Índice</span>
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/85 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title={isFullscreen ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)'}
              aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </footer>

        {/* Slide Overview Grid Modal */}
        <AnimatePresence>
          {isGridOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#12100E]/92 backdrop-blur-md flex flex-col"
            >
              <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-white tracking-tight">
                    Índice de diapositivas · Arcos Dorados 2025
                  </h2>
                  <p className="text-xs text-white/60 mt-0.5">
                    Seleccioná una diapositiva para navegar · Atajos: ← → Espacio · G (Índice) · F (Pantalla completa)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGridOpen(false)}
                  aria-label="Cerrar índice"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {SLIDES_META.map((slide) => {
                    const isActive = slide.index === currentSlide;
                    const themeStyles =
                      slide.theme === 'red'
                        ? 'bg-[#DA291C] text-white'
                        : slide.theme === 'yellow'
                        ? 'bg-[#FFC72C] text-[#231F20]'
                        : 'bg-white text-[#231F20]';
                    const numStyles =
                      slide.theme === 'red'
                        ? 'text-[#FFC72C]'
                        : 'text-[#DA291C]';

                    return (
                      <motion.button
                        key={slide.index}
                        type="button"
                        onClick={() => goToSlide(slide.index)}
                        whileHover={{ y: -4, scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative aspect-video rounded-2xl p-5 flex flex-col justify-between text-left transition-shadow cursor-pointer ${themeStyles} ${
                          isActive
                            ? 'ring-4 ring-[#FFC72C] shadow-[0_12px_36px_rgba(255,199,44,0.28)]'
                            : 'ring-1 ring-white/15 hover:shadow-xl'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[11px] font-extrabold tracking-[0.08em] uppercase opacity-80">
                            {slide.section}
                          </span>
                          <span className={`text-[20px] font-extrabold tabular-nums ${numStyles}`}>
                            {slide.number}
                          </span>
                        </div>

                        <p className="text-[15.5px] font-extrabold leading-snug tracking-[-0.015em]">
                          {slide.title}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
