import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SpecialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'medium';
  children?: React.ReactNode;
  disabled?: boolean;
  // Legacy props die ignoriert werden
  iconElement?: any;
  icon?: any;
}

const SpecialButton = forwardRef<HTMLButtonElement, SpecialButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'medium', 
    children,
    disabled = false,
    className,
    // Alte Props die nicht mehr verwendet werden herausfiltern
    iconElement,
    icon,
    ...props 
  }, ref) => {
    
    // Size Variants
    const sizeVariants = {
      xs: {
        padding: "0.3em 0.8em",
        fontSize: "14px"
      },
      sm: {
        padding: "0.5em 1em",
        fontSize: "15px"
      },
      medium: {
        padding: "0.7em 1.2em",
        fontSize: "17px"
      }
    };

    // Sicherstellen, dass wir eine gültige Größe haben
    const currentSize = sizeVariants[size] || sizeVariants.medium;

    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);

    const getBackgroundColor = () => {
      if (variant === 'primary') {
        return isPressed ? 'rgba(255, 174, 0, 0.6)' : 'rgba(255, 255, 255, 0.15)';
      } else if (variant === 'secondary') {
        return isPressed ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.12)';
      } else if (variant === 'tertiary') {
        return isPressed ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)';
      }
      return 'transparent';
    };

    const getBoxShadow = () => {
      if (variant === 'primary') {
        const glassShadow = isPressed 
          ? '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          : isHovered
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(255, 174, 0, 0.3)'
            : '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
        return glassShadow;
      } else if (variant === 'secondary' || variant === 'tertiary') {
        const glassShadow = isPressed
          ? '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
          : isHovered
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
            : '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
        return glassShadow;
      }
      return 'none';
    };

    const getContainerShadow = () => {
      // Extrem weicher Schatten hinter dem Button, sichtbar durch transparenten Button
      return isPressed
        ? '0 6px 80px rgba(60, 60, 60, 0.4)'
        : isHovered
          ? '0 16px 100px rgba(60, 60, 60, 0.5)'
          : '0 12px 90px rgba(60, 60, 60, 0.45)';
    };

    const getTransform = () => {
      if (isPressed) {
        return 'translateY(2px) scale(0.98)';
      } else if (isHovered) {
        return 'translateY(-2px) scale(1.02)';
      }
      return 'translateY(0px) scale(1)';
    };

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        style={{ 
          cursor: disabled ? 'not-allowed' : 'pointer',
          paddingTop: '0px',
          paddingBottom: '0px',
          filter: `drop-shadow(${getContainerShadow()})`
        }}
      >
        <button
          className={cn('flex items-center justify-center', className)}
          style={{
            opacity: disabled ? 0.5 : 1,
            background: getBackgroundColor(),
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 1)',
            borderRadius: '9999px',
            color: variant === 'primary' ? '#ff8c00' : '#1e293b',
            fontWeight: '600',
            cursor: 'inherit',
            padding: currentSize.padding,
            fontSize: currentSize.fontSize,
            transform: getTransform(),
            boxShadow: getBoxShadow(),
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'visible',
            letterSpacing: '0.01em'
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }
);

SpecialButton.displayName = "SpecialButton";

export { SpecialButton };
export default SpecialButton;
