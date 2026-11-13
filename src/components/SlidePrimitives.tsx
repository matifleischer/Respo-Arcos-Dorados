import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const COLORS = {
  red: '#DA291C',
  yellow: '#FFC72C',
  dark: '#231F20',
  white: '#FFFFFF',
  track: '#EFECE2',
  creamHighlight: '#FDF3D7',
} as const;

interface SlideFrameProps {
  variant: 'red' | 'yellow' | 'white';
  slideNumber?: string;
  footerVariant?: 'yellow' | 'red' | 'none';
  children: React.ReactNode;
}

export const SlideFrame: React.FC<SlideFrameProps> = ({
  variant,
  slideNumber,
  footerVariant = 'yellow',
  children,
}) => {
  const bgClass =
    variant === 'red'
      ? 'bg-[#DA291C] text-white'
      : variant === 'yellow'
      ? 'bg-[#FFC72C] text-[#231F20]'
      : 'bg-white text-[#231F20]';

  const footerClass =
    footerVariant === 'red'
      ? 'bg-[#DA291C] text-white'
      : 'bg-[#FFC72C] text-[#231F20]';

  return (
    <div
      className={`relative w-[1280px] h-[720px] overflow-hidden select-none flex flex-col justify-between ${bgClass}`}
    >
      <div className="relative flex-1 w-full overflow-hidden">{children}</div>

      {footerVariant !== 'none' && (
        <motion.footer
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: EASE_OUT_EXPO }}
          className={`h-[44px] w-full px-[80px] flex items-center justify-between text-[13.5px] font-bold tracking-[-0.01em] shrink-0 ${footerClass}`}
        >
          <span>Arcos Dorados · Reporte de Impacto 2025 · Análisis crítico</span>
          <span className="tabular-nums">{slideNumber}</span>
        </motion.footer>
      )}
    </div>
  );
};

interface SlideKickerProps {
  text: string;
  variant: 'red-on-light' | 'white-on-red';
}

export const SlideKicker: React.FC<SlideKickerProps> = ({ text, variant }) => {
  const styleClass =
    variant === 'white-on-red'
      ? 'bg-white text-[#DA291C]'
      : 'bg-[#DA291C] text-white';

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      className={`inline-flex items-center px-5 py-1.5 rounded-full text-[13.5px] font-extrabold tracking-[0.11em] uppercase ${styleClass}`}
    >
      {text}
    </motion.div>
  );
};

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
  duration?: number;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  useGrouping = true,
  duration = 950,
  className = '',
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(value * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [value, duration]);

  const formatted = new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping,
  }).format(decimals === 0 ? Math.round(display) : display);

  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const EqualizerBars: React.FC<{ className?: string; count?: 5 | 6 }> = ({
  className = '',
  count = 6,
}) => {
  const bars6 = [
    { height: 172, delay: 0.15 },
    { height: 226, delay: 0.22 },
    { height: 146, delay: 0.29 },
    { height: 254, delay: 0.36 },
    { height: 194, delay: 0.43 },
    { height: 132, delay: 0.5 },
  ];

  const bars5 = [
    { height: 140, delay: 0.16 },
    { height: 205, delay: 0.23 },
    { height: 162, delay: 0.3 },
    { height: 232, delay: 0.37 },
    { height: 178, delay: 0.44 },
  ];

  const bars = count === 5 ? bars5 : bars6;

  return (
    <div className={`flex items-end gap-[11px] pointer-events-none ${className}`}>
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, opacity: 0.5 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.65,
            delay: bar.delay,
            ease: EASE_OUT_EXPO,
          }}
          style={{
            height: `${bar.height}px`,
            transformOrigin: 'bottom',
          }}
          className="w-[31px] bg-[#FFC72C] rounded-t-full"
        />
      ))}
    </div>
  );
};
