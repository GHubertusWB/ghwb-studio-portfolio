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
        return isPressed ? '#e69500' : '#ffae00ff'; // Dunkler beim Click
      } else if (variant === 'secondary' || variant === 'tertiary') {
        return isPressed ? '#d0d0d0' : '#ffffffff'; // Dunkler beim Click
      }
      return 'transparent';
    };

    const getBoxShadow = () => {
      if (variant === 'primary' && isHovered && !isPressed) {
        return '0 0 20px rgba(255, 174, 0, 0.6), 0 0 40px rgba(255, 174, 0, 0.4), 0 0 60px rgba(255, 174, 0, 0.2)';
      }
      return 'none';
    };

    const getTransform = () => {
      if (isPressed) {
        return 'translateY(-3px)'; // Ganz nach unten beim Click
      } else if (isHovered) {
        return 'translateY(-8px)'; // Hover Position
      }
      return 'translateY(-3px)'; // Default Position
    };

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        {/* Fester Schatten-Container für primary, secondary und tertiary - jetzt hoverbar */}
        {(variant === 'primary' || variant === 'secondary' || variant === 'tertiary') && (
          <div 
            className="absolute inset-0 bg-black"
            style={{
              transform: 'translate(0px, -3px)',
              zIndex: 1
            }}
          />
        )}
        
        <button
          className={cn('flex items-center justify-center', className)}
          style={{
            opacity: disabled ? 0.5 : 1,
            position: 'relative',
            zIndex: 2,
            background: getBackgroundColor(),
            border: variant === 'tertiary' ? 'none' : '1px solid #000000',
            borderRadius: '0px',
            color: '#000000',
            fontWeight: 'bold',
            cursor: 'inherit', // Erbt vom Container
            padding: currentSize.padding,
            fontSize: currentSize.fontSize,
            transform: getTransform(),
            boxShadow: getBoxShadow(),
            transition: 'transform 0.1s ease, background-color 0.1s ease, box-shadow 0.3s ease',
            overflow: 'visible' // Button selbst soll nicht abschneiden
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
