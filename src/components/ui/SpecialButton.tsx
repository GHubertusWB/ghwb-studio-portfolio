import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Realistischer Loading Spinner mit Neomorphism-Effekt
const NeomorphicLoadingSpinner = ({ size }: { size: 'sm' | 'base' | 'lg' }) => {
  const spinnerSizes = {
    sm: 'w-4 h-4',
    base: 'w-5 h-5', 
    lg: 'w-6 h-6'
  };

  return (
    <motion.div
      className={cn("rounded-full relative", spinnerSizes[size])}
      style={{
        background: `
          conic-gradient(from 0deg,
            rgba(255,255,255,0.1) 0deg,
            rgba(0,0,0,0.15) 90deg,
            rgba(255,255,255,0.1) 180deg,
            rgba(0,0,0,0.15) 270deg,
            rgba(255,255,255,0.1) 360deg
          )
        `,
        boxShadow: `
          inset 1px 1px 2px rgba(255,255,255,0.2),
          inset -1px -1px 2px rgba(0,0,0,0.1)
        `
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.2,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div 
        className="absolute inset-0.5 rounded-full"
        style={{
          background: 'var(--background)',
          boxShadow: `
            1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 2px rgba(255,255,255,0.1)
          `
        }}
      />
    </motion.div>
  );
};

export interface SpecialButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'gradient' | 'glow' | 'neon';
  size?: 'sm' | 'base' | 'lg' | 'variabel';
  icon?: 'none' | 'left' | 'right' | 'only';
  iconElement?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  glowColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const SpecialButton = forwardRef<HTMLButtonElement, SpecialButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'base', 
    icon = 'none',
    iconElement,
    children,
    disabled = false,
    loading = false,
    glowColor = '#06B6D4',
    gradientFrom = '#06B6D4',
    gradientTo = '#3B82F6',
    className,
    ...props 
  }, ref) => {
    
    const [isHovered, setIsHovered] = React.useState(false);
    
    // Realistischer Neomorphism Base Style
    const baseStyles = cn(
      "relative inline-flex items-center justify-center",
      icon === 'only' ? "rounded-full" : "rounded-2xl",
      "font-['Poppins'] font-medium leading-tight tracking-wide",
      "transition-all duration-300 ease-out",
      "focus:outline-none select-none",
      "transform-gpu", // Hardware-Beschleunigung
      disabled 
        ? "cursor-not-allowed opacity-50" 
        : loading
        ? "cursor-wait opacity-80"
        : "cursor-pointer active:scale-[0.98]"
    );

    // Neomorphism Size Variants - Realistische Proportionen
    const sizeVariants = {
      sm: {
        padding: icon === 'only' ? "p-2.5 aspect-square" : "px-4 py-2.5",
        text: "text-sm",
        gap: "gap-2",
        iconSize: "w-4 h-4",
        borderRadius: icon === 'only' ? "rounded-full" : "rounded-xl",
        shadowDepth: "4px"
      },
      base: {
        padding: icon === 'only' ? "p-3.5 aspect-square" : "px-6 py-3.5",
        text: "text-base",
        gap: "gap-2.5",
        iconSize: "w-5 h-5",
        borderRadius: icon === 'only' ? "rounded-full" : "rounded-2xl",
        shadowDepth: "6px"
      },
      lg: {
        padding: icon === 'only' ? "p-4 aspect-square" : "px-8 py-4",
        text: "text-lg",
        gap: "gap-3",
        iconSize: "w-6 h-6",
        borderRadius: icon === 'only' ? "rounded-full" : "rounded-3xl",
        shadowDepth: "8px"
      },
      variabel: {
        padding: icon === 'only' ? "p-3.5 aspect-square" : "px-8 py-3.5",
        text: "text-base",
        gap: "gap-2.5",
        iconSize: "w-5 h-5",
        borderRadius: icon === 'only' ? "rounded-full" : "rounded-2xl",
        shadowDepth: "6px"
      }
    };

    // Weicher Stoff-Neomorphism - Organische Form unter Textil
    const isDisabledOrLoading = disabled || loading;
    const currentSizeConfig = sizeVariants[size] || sizeVariants.base;
    const shadowDepth = currentSizeConfig.shadowDepth;
    

    
    const animationVariants = {
      rest: {
        scale: 1,
        y: 0,
        boxShadow: isDisabledOrLoading ? 'none' : `
          -${parseInt(shadowDepth)}px -${parseInt(shadowDepth)}px ${parseInt(shadowDepth) * 3}px rgba(255, 255, 255, 0.8),
          ${parseInt(shadowDepth)}px ${parseInt(shadowDepth)}px ${parseInt(shadowDepth) * 3}px rgba(0, 0, 0, 0.15),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 2px 2px 6px rgba(0, 0, 0, 0.08),
          inset -2px -2px 6px rgba(255, 255, 255, 0.3)
        `,
      },
      hover: isDisabledOrLoading ? {} : {
        scale: variant === 'primary' ? 1.08 : 
               variant === 'secondary' && size === 'variabel' ? 1.02 :
               variant === 'secondary' ? 1.05 : 1.002,
        y: -2,
        boxShadow: variant === 'primary' ? `
          -${parseInt(shadowDepth) * 3}px -${parseInt(shadowDepth) * 3}px ${parseInt(shadowDepth) * 12}px rgba(255, 255, 255, 0.9),
          ${parseInt(shadowDepth) * 3}px ${parseInt(shadowDepth) * 3}px ${parseInt(shadowDepth) * 12}px rgba(0, 0, 0, 0.15),
          0 0 0 1px rgba(255, 255, 255, 0.2),
          inset 3px 3px 8px rgba(255, 165, 0, 0.15),
          inset -3px -3px 8px rgba(255, 255, 255, 0.4)
        ` : variant === 'secondary' ? `
          -${parseInt(shadowDepth) * 2}px -${parseInt(shadowDepth) * 2}px ${parseInt(shadowDepth) * 8}px rgba(255, 255, 255, 0.9),
          ${parseInt(shadowDepth) * 2}px ${parseInt(shadowDepth) * 2}px ${parseInt(shadowDepth) * 8}px rgba(0, 0, 0, 0.18),
          0 0 0 1px rgba(255, 255, 255, 0.18),
          inset 2px 2px 6px rgba(135, 206, 235, 0.12),
          inset -2px -2px 6px rgba(255, 255, 255, 0.4)
        ` : `
          -${parseInt(shadowDepth) * 1.2}px -${parseInt(shadowDepth) * 1.2}px ${parseInt(shadowDepth) * 4}px rgba(255, 255, 255, 0.9),
          ${parseInt(shadowDepth) * 1.2}px ${parseInt(shadowDepth) * 1.2}px ${parseInt(shadowDepth) * 4}px rgba(0, 0, 0, 0.2),
          0 0 0 1px rgba(255, 255, 255, 0.15),
          inset 2px 2px 6px rgba(0, 0, 0, 0.08),
          inset -2px -2px 6px rgba(255, 255, 255, 0.35),
          0 0 ${parseInt(shadowDepth) * 2}px rgba(6, 182, 212, 0.05)
        `,
      },
      tap: isDisabledOrLoading ? {} : {
        scale: 0.998,
        y: 0,
        boxShadow: `
          -${parseInt(shadowDepth) * 0.5}px -${parseInt(shadowDepth) * 0.5}px ${parseInt(shadowDepth) * 1.5}px rgba(255, 255, 255, 0.6),
          ${parseInt(shadowDepth) * 0.5}px ${parseInt(shadowDepth) * 0.5}px ${parseInt(shadowDepth) * 1.5}px rgba(0, 0, 0, 0.12),
          0 0 0 1px rgba(255, 255, 255, 0.08),
          inset 4px 4px 8px rgba(0, 0, 0, 0.12),
          inset -4px -4px 8px rgba(255, 255, 255, 0.25)
        `,
      }
    };

    // Ultrarealistisches Neomorphism - Material-Style
    const variantStyles = {
      primary: disabled
        ? "text-gray-400 dark:text-gray-500"
        : "text-orange-500 opacity-85",
      
      secondary: disabled
        ? "text-gray-400 dark:text-gray-500"
        : "text-foreground opacity-85",
      
      gradient: disabled
        ? "text-gray-400 dark:text-gray-500"
        : "text-foreground",
      
      glow: disabled
        ? "text-gray-400 dark:text-gray-500"
        : "text-foreground",
      
      neon: disabled
        ? "text-gray-400 dark:text-gray-500"
        : "text-foreground"
    };

    // Ultraweicher Pudding-Look wie im Referenzbild - Konkav-Effekt
    const getSoftPuddingBackground = () => {
      if (disabled) {
        return {
          background: `
            radial-gradient(ellipse 150% 100% at 30% 20%, #f5f5f5 0%, #ebebeb 40%, #e8e8e8 100%),
            linear-gradient(145deg, #f2f2f2 0%, #e6e6e6 100%)
          `,
          color: '#999999'
        };
      }
      
      // Ultra-weicher Neomorphism-Style basierend auf der Vorlage - Konkaver Effekt
      return {
        background: `
          var(--background),
          linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0.02) 100%)
        `,
        opacity: 1,
        // Konkaver Inset-Effekt für eingedrückte Optik
        boxShadow: `
          inset 2px 2px 6px rgba(0, 0, 0, 0.08),
          inset -2px -2px 6px rgba(255, 255, 255, 0.3)
        `
      };
    };

    // Icon rendern mit realistischen Schatten und Leuchteffekt
    const renderIcon = () => {
      if (!iconElement || icon === 'none') return null;
      
      return (
        <motion.span 
          className={currentSizeConfig.iconSize}
          style={{
            filter: disabled ? 'none' : 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))',
            transition: 'filter 0.2s ease'
          }}
          animate={!isDisabledOrLoading && (variant === 'primary' || variant === 'secondary') && isHovered ? 
            (variant === 'primary' ? "iconGlowOrange" : "iconGlowBlue") : "rest"}
          variants={{
            rest: {
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))'
            },
            iconGlowOrange: {
              filter: [
                'drop-shadow(0 1px 1px rgba(0,0,0,0.1))',
                'drop-shadow(0 0 8px rgba(255, 165, 0, 0.8)) drop-shadow(0 0 12px rgba(255, 140, 0, 0.6))',
                'drop-shadow(0 0 10px rgba(255, 165, 0, 1)) drop-shadow(0 0 16px rgba(255, 140, 0, 0.7))',
                'drop-shadow(0 0 9px rgba(255, 165, 0, 0.9)) drop-shadow(0 0 14px rgba(255, 140, 0, 0.65))'
              ]
            },
            iconGlowBlue: {
              filter: [
                'drop-shadow(0 1px 1px rgba(0,0,0,0.1))',
                'drop-shadow(0 0 8px rgba(135, 206, 235, 0.8)) drop-shadow(0 0 12px rgba(100, 149, 237, 0.6))',
                'drop-shadow(0 0 10px rgba(135, 206, 235, 1)) drop-shadow(0 0 16px rgba(100, 149, 237, 0.7))',
                'drop-shadow(0 0 9px rgba(135, 206, 235, 0.9)) drop-shadow(0 0 14px rgba(100, 149, 237, 0.65))'
              ]
            }
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {iconElement}
        </motion.span>
      );
    };

    // Content mit Loading-State
    const renderContent = () => {
      if (loading) {
        const spinnerSize = size === 'variabel' ? 'lg' : size;
        
        if (icon === 'only') {
          return <NeomorphicLoadingSpinner size={spinnerSize} />;
        }
        
        return (
          <div className="flex items-center">
            <NeomorphicLoadingSpinner size={spinnerSize} />
            {children && <span className="ml-2">{children}</span>}
          </div>
        );
      }
      
      const iconComponent = renderIcon();
      
      if (icon === 'only') {
        return iconComponent;
      }
      
      if (icon === 'left') {
        return (
          <div className="flex items-center">
            {iconComponent}
            <span>{children}</span>
          </div>
        );
      }
      
      if (icon === 'right') {
        return (
          <div className="flex items-center">
            <span>{children}</span>
            {iconComponent}
          </div>
        );
      }
      
      return <span>{children}</span>;
    };

    // Leuchtende Kugel RGB-Werte extrahieren
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
        : '6, 182, 212';
    };

    return (
      <motion.button
          className={cn(
            baseStyles,
            currentSizeConfig.padding,
            currentSizeConfig.text,
            currentSizeConfig.borderRadius,
            (icon !== 'none' && icon !== 'only' && !loading) && currentSizeConfig.gap,
            loading && currentSizeConfig.gap,
            size === 'variabel' && 'w-full',
            variantStyles[variant] || variantStyles.primary,
            className
          )}
          style={{ 
            outline: 'none',
            ...getSoftPuddingBackground(),
            ...props.style 
          }}
          variants={animationVariants}
          initial="rest"
          animate="rest"
          whileHover={!isDisabledOrLoading ? "hover" : undefined}
          whileTap={!isDisabledOrLoading ? "tap" : undefined}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{
            type: "spring",
            stiffness: variant === 'primary' ? 150 : 
                      variant === 'secondary' && size === 'variabel' ? 220 :
                      variant === 'secondary' ? 180 : 200,
            damping: variant === 'primary' ? 25 : 
                    variant === 'secondary' && size === 'variabel' ? 35 :
                    variant === 'secondary' ? 28 : 30,
            mass: variant === 'primary' ? 1.5 : 
                 variant === 'secondary' && size === 'variabel' ? 1.1 :
                 variant === 'secondary' ? 1.3 : 1.2
          }}
          ref={ref}
          disabled={disabled || loading}
          {...props}
        >

        
        {/* Content Layer mit Text-Schatten für Tiefe */}
        <motion.div 
          className="relative z-10 flex items-center justify-center"
          style={{
            textShadow: disabled ? 'none' : 
              variant === 'primary' ? '0 1px 2px rgba(0,0,0,0.1)' : 
              '0 1px 2px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          animate={!isDisabledOrLoading && (variant === 'primary' || variant === 'secondary') && isHovered ? 
            (variant === 'primary' ? "textGlowOrange" : "textGlowBlue") : "rest"}
          variants={{
            rest: {
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            },
            textGlowOrange: {
              textShadow: [
                '0 1px 2px rgba(0,0,0,0.1)',
                '0 0 12px rgba(255, 165, 0, 0.9), 0 0 20px rgba(255, 140, 0, 0.7), 0 0 32px rgba(255, 165, 0, 0.5)',
                '0 0 16px rgba(255, 165, 0, 1), 0 0 24px rgba(255, 140, 0, 0.8), 0 0 36px rgba(255, 165, 0, 0.6)',
                '0 0 14px rgba(255, 165, 0, 0.95), 0 0 22px rgba(255, 140, 0, 0.75), 0 0 34px rgba(255, 165, 0, 0.55)'
              ]
            },
            textGlowBlue: {
              textShadow: [
                '0 1px 2px rgba(0,0,0,0.1)',
                '0 0 12px rgba(135, 206, 235, 0.9), 0 0 20px rgba(100, 149, 237, 0.7), 0 0 32px rgba(135, 206, 235, 0.5)',
                '0 0 16px rgba(135, 206, 235, 1), 0 0 24px rgba(100, 149, 237, 0.8), 0 0 36px rgba(135, 206, 235, 0.6)',
                '0 0 14px rgba(135, 206, 235, 0.95), 0 0 22px rgba(100, 149, 237, 0.75), 0 0 34px rgba(135, 206, 235, 0.55)'
              ]
            }
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {renderContent()}
        </motion.div>
      </motion.button>
    );
  }
);

SpecialButton.displayName = "SpecialButton";

export { SpecialButton };
export default SpecialButton;
