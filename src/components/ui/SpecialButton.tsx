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
    const [isFocused, setIsFocused] = React.useState(false);

    // Aktiviert Hover-Visuell auch bei Tastaturfokus
    const isActive = isHovered || isFocused;

    const getBackgroundColor = () => {
      if (variant === 'primary') {
        return isPressed ? 'rgba(255, 174, 0, 0.6)' : 'rgba(255, 174, 0, 0.2)';
      } else if (variant === 'secondary') {
        return isPressed ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)';
      } else if (variant === 'tertiary') {
        return isPressed ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)';
      }
      return 'transparent';
    };

    const getBoxShadow = () => {
      if (variant === 'primary') {
        const glassShadow = isPressed 
          ? '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
          : isActive
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(255, 174, 0, 0.3)'
            : '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)';
        return glassShadow;
      } else if (variant === 'secondary' || variant === 'tertiary') {
        const glassShadow = isPressed
          ? '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
          : isActive
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
            : '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
        return glassShadow;
      }
      return 'none';
    };

    const getContainerShadow = () => {
      return isPressed
        ? '0 6px 80px rgba(60, 60, 60, 0.4)'
        : isActive
          ? '0 16px 100px rgba(60, 60, 60, 0.5)'
          : '0 12px 90px rgba(60, 60, 60, 0.45)';
    };

    const getTransform = () => {
      if (isPressed) {
        return 'translateY(2px) scale(0.98)';
      } else if (isActive) {
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
        }}
      >
        <button
          className={cn('flex items-center justify-center', className)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setIsPressed(false);
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') setIsPressed(true);
          }}
          onKeyUp={(e) => {
            if (e.key === ' ' || e.key === 'Enter') setIsPressed(false);
          }}
          style={{
            opacity: disabled ? 0.5 : 1,
            background: variant === 'primary' ? '#FFAE00' : '#f0f9ff',
            border: variant === 'primary' ? '1px solid #ff8c00' : '1px solid #d1d5db',
            borderRadius: '9999px',
            color: variant === 'primary' ? '#ffffff' : '#1e293b',
            fontWeight: '600',
            cursor: 'inherit',
            padding: currentSize.padding,
            fontSize: currentSize.fontSize,
            boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
            transform: isPressed ? 'scale(0.98)' : isActive ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.2s ease-out',
            overflow: 'visible',
            letterSpacing: '0.01em',
            // WCAG 2.4.7: sichtbarer Fokus-Indikator
            outline: isFocused
              ? variant === 'primary'
                ? '3px solid #1d4ed8'
                : '3px solid #1d4ed8'
              : 'none',
            outlineOffset: '3px',
          }}
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
