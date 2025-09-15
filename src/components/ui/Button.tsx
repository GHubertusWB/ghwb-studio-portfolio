import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Performanter Loading Spinner mit Framer Motion
const LoadingSpinner = ({ size }: { size: 'xs' | 'sm' | 'base' }) => {
  const spinnerSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4', 
    base: 'w-4 h-4'
  };

  return (
    <motion.div
      className={cn("border-2 border-current border-t-transparent rounded-full", spinnerSizes[size])}
      animate={{ rotate: 360 }}
      transition={{
        duration: 0.8,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        willChange: 'transform'
      }}
    />
  );
};

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'base';
  icon?: 'none' | 'left' | 'right' | 'only';
  iconElement?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'secondary', 
    size = 'base', 
    icon = 'none',
    iconElement,
    children,
    disabled = false,
    loading = false,
    className,
    ...props 
  }, ref) => {
    
    // Base styles - rounded pill buttons wie im Figma
    const baseStyles = cn(
      "relative inline-flex items-center justify-center rounded-full",
      "font-['Poppins'] font-semibold leading-tight",
      "transition-all duration-200 ease-in-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
      "!outline-none", // Forciert outline: none mit !important
      disabled 
        ? "cursor-not-allowed opacity-60" 
        : loading
        ? "cursor-wait opacity-80"
        : "cursor-pointer"
    );

    // Framer Motion Glow Animation Varianten - optimiert für sofortige Reaktion
    const isDisabledOrLoading = disabled || loading;
    
    const glowVariants = {
      rest: {
        boxShadow: isDisabledOrLoading ? 'none' : (() => {
          switch (variant) {
            case 'primary':
              return '0 0 8px rgba(6, 182, 212, 0.2), 0 0 16px rgba(6, 182, 212, 0.1)';
            case 'secondary':
              return '0 0 8px rgba(6, 182, 212, 0.15), 0 0 16px rgba(6, 182, 212, 0.05)';
            case 'tertiary':
              return 'none';
            default:
              return '0 0 8px rgba(6, 182, 212, 0.15), 0 0 16px rgba(6, 182, 212, 0.05)';
          }
        })(),
        scale: 1
      },
      hover: isDisabledOrLoading ? {} : {
        boxShadow: '0 0 12px rgba(6, 182, 212, 0.3), 0 0 24px rgba(6, 182, 212, 0.15)'
      },
      tap: isDisabledOrLoading ? {} : {
        scale: 0.98
      },
      loading: {
        boxShadow: 'none',
        scale: 1
      }
    };

    // Size variants - exakt nach Figma Größen
    const sizeVariants = {
      xs: {
        padding: icon === 'only' ? "p-2" : "px-3 py-2",
        text: "text-xs",
        gap: "gap-1.5",
        iconSize: "w-3 h-3"
      },
      sm: {
        padding: icon === 'only' ? "p-2.5" : "px-4 py-2.5",
        text: "text-sm",
        gap: "gap-2",
        iconSize: "w-4 h-4"
      },
      base: {
        padding: icon === 'only' ? "p-3" : "px-5 py-3",
        text: "text-sm",
        gap: "gap-2",
        iconSize: "w-4 h-4"
      }
    };

    // Variant styles - mit exakten #06B6D4 Farben und Deckkraft
    const variantStyles = {
      // Primary - #06B6D4 mit 15% Default, 50% Hover, Border: automatischer Theme-Wechsel
      primary: disabled
        ? "bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400"
        : cn(
            "bg-cyan-500/15 border border-foreground text-foreground",
            "hover:bg-cyan-500/50 hover:border-foreground hover:text-foreground",
            "focus-visible:bg-cyan-500/15 focus-visible:ring-cyan-500 focus-visible:text-foreground",
            "active:bg-cyan-500/60 active:text-foreground"
          ),
      
      // Secondary - transparent mit 1px #06B6D4 Border
      secondary: disabled
        ? "bg-gray-200 border border-gray-300 text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500"
        : cn(
            "bg-transparent border border-foreground text-foreground",
            "hover:bg-cyan-500/25 hover:border-foreground hover:text-foreground",
            "focus-visible:bg-transparent focus-visible:border-cyan-500 focus-visible:ring-cyan-500 focus-visible:text-foreground",
            "active:bg-cyan-500/30 active:border-foreground active:text-foreground"
          ),
      
      // Tertiary - transparent ohne Border, Hover #06B6D4 25%
      tertiary: disabled
        ? "bg-transparent border border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500"
        : cn(
            "bg-transparent text-foreground",
            "hover:bg-cyan-500/25 hover:border hover:border-cyan-500 hover:text-foreground",
            "focus-visible:bg-transparent focus-visible:border focus-visible:border-cyan-500 focus-visible:ring-cyan-500 focus-visible:text-foreground",
            "active:bg-cyan-500/30 active:border active:border-cyan-500 active:text-foreground"
          )
    };    const currentSize = sizeVariants[size] || sizeVariants.base;
    
    // Icon rendern
    const renderIcon = () => {
      if (!iconElement || icon === 'none') return null;
      
      return (
        <span className={currentSize.iconSize}>
          {iconElement}
        </span>
      );
    };

    // Content rendern mit Loading-State
    const renderContent = () => {
      if (loading) {
        if (icon === 'only') {
          return <LoadingSpinner size={size} />;
        }
        
        return (
          <>
            <LoadingSpinner size={size} />
            {children && <span className="ml-2">{children}</span>}
          </>
        );
      }
      
      const iconComponent = renderIcon();
      
      if (icon === 'only') {
        return iconComponent;
      }
      
      if (icon === 'left') {
        return (
          <>
            {iconComponent}
            <span>{children}</span>
          </>
        );
      }
      
      if (icon === 'right') {
        return (
          <>
            <span>{children}</span>
            {iconComponent}
          </>
        );
      }
      
      return <span>{children}</span>;
    };

    return (
      <motion.button
        className={cn(
          baseStyles,
          currentSize.padding,
          currentSize.text,
          (icon !== 'none' && icon !== 'only' && !loading) && currentSize.gap,
          loading && currentSize.gap, // Gap für Loading-State
          variantStyles[variant] || variantStyles.secondary,
          className
        )}
        variants={glowVariants}
        initial="rest"
        animate={loading ? "loading" : "rest"}
        whileHover={!isDisabledOrLoading ? "hover" : undefined}
        whileTap={!isDisabledOrLoading ? "tap" : undefined}
        transition={{
          type: "tween",
          duration: 0.1,
          ease: "easeOut"
        }}
        ref={ref}
        disabled={disabled || loading}
        style={{ outline: 'none', ...props.style }}
        {...props}
      >
        {renderContent()}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;
