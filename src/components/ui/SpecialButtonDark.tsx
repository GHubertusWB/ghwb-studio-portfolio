import React, { forwardRef, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

// Loading Spinner für Dark Mode
const DarkLoadingSpinner = ({ size }: { size: 'sm' | 'base' | 'lg' }) => {
  const spinnerSizes = {
    sm: 'w-3 h-3',
    base: 'w-4 h-4', 
    lg: 'w-5 h-5'
  };

  return (
    <motion.div
      className={cn("rounded-full border-2 border-transparent", spinnerSizes[size])}
      style={{
        borderTopColor: 'currentColor',
        borderRightColor: 'currentColor',
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export interface SpecialButtonDarkProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'base' | 'lg';
  icon?: 'none' | 'left' | 'right' | 'only';
  iconElement?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SpecialButtonDark = forwardRef<HTMLButtonElement, SpecialButtonDarkProps>(
  ({ 
    variant = 'primary', 
    size = 'base', 
    icon = 'none',
    iconElement,
    children,
    disabled = false,
    loading = false,
    className = '',
    ...props 
  }, ref) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    // Hover state tracking
    // Removed cursor-following animation

    // Variant-spezifische Farben
    const variantConfig = {
      primary: {
        textColor: 'text-orange-400',
        borderColor: '#fb923c', // Orange
        secondaryColor: '#fb923c', // Blau
        glowColor: 'rgba(255, 162, 0, 1)',
        secondaryGlow: 'rgba(255, 162, 0, 1)',
        bgHover: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
        fontWeight: 'font-semibold' // Höheres Font-Weight für Primary
      },
      secondary: {
        textColor: 'text-white',
        borderColor: '#ffffffff', // Grau
        secondaryColor: '#ffffffff', // Dunkelgrau
        glowColor: 'rgba(63, 223, 255, 0.63)',
        secondaryGlow: 'rgba(63, 223, 255, 0.63)',
        bgHover: 'linear-gradient(135deg, rgba(156, 163, 175, 0.1) 0%, rgba(107, 114, 128, 0.1) 100%)',
        fontWeight: 'font-medium' // Standard Font-Weight für Secondary
      },
      tertiary: {
        textColor: 'text-white',
        borderColor: '#6b7280', // Dunkelgrau (nur beim Hover sichtbar)
        secondaryColor: '#4b5563', // Sehr dunkelgrau (nur beim Hover sichtbar)
        glowColor: 'rgba(107, 114, 128, 0.4)',
        secondaryGlow: 'rgba(75, 85, 99, 0.2)',
        bgHover: 'linear-gradient(135deg, rgba(107, 114, 128, 0.08) 0%, rgba(75, 85, 99, 0.08) 100%)',
        fontWeight: 'font-medium' // Standard Font-Weight für Tertiary
      }
    };

    const config = variantConfig[variant];
    const isDisabledOrLoading = disabled || loading;

    // Size Variants
    const sizeVariants = {
      sm: {
        padding: icon === 'only' ? 'p-2' : 'px-3 py-2',
        text: 'text-sm',
        gap: 'gap-1.5',
        iconSize: 'w-3 h-3',
        buttonWidth: 120,
        buttonHeight: 35
      },
      base: {
        padding: icon === 'only' ? 'p-3' : 'px-4 py-3',
        text: 'text-base',
        gap: 'gap-2',
        iconSize: 'w-4 h-4',
        buttonWidth: 180,
        buttonHeight: 50
      },
      lg: {
        padding: icon === 'only' ? 'p-4' : 'px-6 py-4',
        text: 'text-lg',
        gap: 'gap-2.5',
        iconSize: 'w-5 h-5',
        buttonWidth: 220,
        buttonHeight: 60
      }
    };

    const currentSize = sizeVariants[size];

    // Icon rendern
    const renderIcon = () => {
      if (!iconElement || icon === 'none') return null;
      
      return (
        <span className={currentSize.iconSize}>
          {iconElement}
        </span>
      );
    };

    // Content mit Loading-State
    const renderContent = () => {
      if (loading) {
        if (icon === 'only') {
          return <DarkLoadingSpinner size={size} />;
        }
        
        return (
          <div className={cn("flex items-center", currentSize.gap)}>
            <DarkLoadingSpinner size={size} />
            {children && <span>{children}</span>}
          </div>
        );
      }
      
      const iconComponent = renderIcon();
      
      if (icon === 'only') {
        return iconComponent;
      }
      
      if (icon === 'left') {
        return (
          <div className={cn("flex items-center", currentSize.gap)}>
            {iconComponent}
            <span>{children}</span>
          </div>
        );
      }
      
      if (icon === 'right') {
        return (
          <div className={cn("flex items-center", currentSize.gap)}>
            <span>{children}</span>
            {iconComponent}
          </div>
        );
      }
      
      return <span>{children}</span>;
    };

    return (
      <motion.button
        ref={(node) => {
          if (buttonRef.current !== node) {
            (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
        }}
        className={cn(
          "relative inline-flex items-center justify-center",
          config.fontWeight, // Variantenspezifisches Font-Weight
          "tracking-wide transition-colors duration-300",
          "font-[var(--font-poppins)]", // Explizit Poppins für Buttons
          "focus:outline-none select-none bg-transparent border-none",
          "transform-gpu overflow-visible", // overflow-visible für die Border-Effekte
          currentSize.padding,
          currentSize.text,
          config.textColor,
          isDisabledOrLoading 
            ? "cursor-not-allowed opacity-40" 
            : loading
            ? "cursor-wait opacity-70"
            : "cursor-pointer",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!isDisabledOrLoading ? { scale: 1.02 } : undefined}
        whileTap={!isDisabledOrLoading ? { scale: 0.98 } : undefined}
        transition={{ duration: 0.2 }}
        disabled={disabled || loading}
        {...props}
      >
        {/* Hover Background - simpler Farbverlauf */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: config.bgHover,
          }}
          initial={{ opacity: 0 }}
          animate={isHovered && !isDisabledOrLoading ? { 
            opacity: 1
          } : { 
            opacity: 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Cursor-Following animation removed */}

        {/* Corner Border Animation - ohne Überlappung */}
        {/* Top-Left Corner */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: '-2px',
            left: '-2px',
            borderTop: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.borderColor}`,
            borderLeft: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.borderColor}`,
            filter: `drop-shadow(0 0 6px ${config.glowColor})`,
          }}
          initial={{ width: '8px', height: '8px' }}
          animate={isHovered && !isDisabledOrLoading ? {
            width: '50%',
            height: '50%'
          } : {
            width: '8px',
            height: '8px'
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Top-Right Corner */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: '-2px',
            right: '-2px',
            borderTop: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.secondaryColor}`,
            borderRight: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.secondaryColor}`,
            filter: `drop-shadow(0 0 6px ${config.secondaryGlow})`,
          }}
          initial={{ width: '8px', height: '8px' }}
          animate={isHovered && !isDisabledOrLoading ? {
            width: '50%',
            height: '50%'
          } : {
            width: '8px',
            height: '8px'
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom-Left Corner */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            bottom: '-2px',
            left: '-2px',
            borderBottom: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.borderColor}`,
            borderLeft: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.borderColor}`,
            filter: `drop-shadow(0 0 6px ${config.glowColor})`,
          }}
          initial={{ width: '8px', height: '8px' }}
          animate={isHovered && !isDisabledOrLoading ? {
            width: '50%',
            height: '50%'
          } : {
            width: '8px',
            height: '8px'
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Bottom-Right Corner */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            bottom: '-2px',
            right: '-2px',
            borderBottom: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.secondaryColor}`,
            borderRight: `2px solid ${variant === 'tertiary' && !isHovered ? 'transparent' : config.secondaryColor}`,
            filter: `drop-shadow(0 0 6px ${config.secondaryGlow})`,
          }}
          initial={{ width: '8px', height: '8px' }}
          animate={isHovered && !isDisabledOrLoading ? {
            width: '50%',
            height: '50%'
          } : {
            width: '8px',
            height: '8px'
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Center Glow - füllt den mittleren Bereich */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(ellipse, ${config.glowColor} 0%, ${config.secondaryGlow} 30%, transparent 70%)`,
            filter: 'blur(6px)',
            mixBlendMode: 'screen',
          }}
          initial={{ width: '0px', height: '0px', opacity: 0 }}
          animate={isHovered && !isDisabledOrLoading ? {
            width: `${currentSize.buttonWidth * 0.6}px`,
            height: `${currentSize.buttonHeight * 0.6}px`,
            opacity: 0.3
          } : {
            width: '0px',
            height: '0px',
            opacity: 0
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center">
          {renderContent()}
        </div>
      </motion.button>
    );
  }
);

SpecialButtonDark.displayName = "SpecialButtonDark";

export { SpecialButtonDark };
export default SpecialButtonDark;
