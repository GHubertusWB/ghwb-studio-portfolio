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
      } else if (variant === 'secondary') {
        return isPressed ? '#d0d0d0' : '#ffffffff'; // Dunkler beim Click
      } else if (variant === 'tertiary') {
        return isPressed ? 'rgba(0, 0, 0, 0.1)' : 'transparent'; // Leichte Füllung beim Click, sonst transparent
      }
      return 'transparent';
    };

    const getBoxShadow = () => {
      const baseOffset = isPressed ? '0px 0px' : (isHovered ? '0px 5px' : '0px 0px');
      const shadowColor = 'rgba(0, 0, 0, 1)';
      
      if (variant === 'primary') {
        const glowShadow = isHovered && !isPressed 
          ? ', 0 0 20px rgba(255, 174, 0, 0.6), 0 0 40px rgba(255, 174, 0, 0.4), 0 0 60px rgba(255, 174, 0, 0.2)' 
          : '';
        return `${baseOffset} ${shadowColor}${glowShadow}`;
      } else if (variant === 'secondary' || variant === 'tertiary') {
        return `${baseOffset} ${shadowColor}`;
      }
      return 'none';
    };

    const getTransform = () => {
      if (isPressed) {
        return 'translateY(0px)'; // Ganz nach unten beim Click
      } else if (isHovered) {
        return 'translateY(-5px)'; // Hover Position
      }
      return 'translateY(0px)'; // Default Position
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
          paddingTop: (variant === 'primary' || variant === 'secondary' || variant === 'tertiary') ? '5px' : '0px',
          paddingBottom: (variant === 'primary' || variant === 'secondary' || variant === 'tertiary') ? '5px' : '0px'
        }}
      >
        <button
          className={cn('flex items-center justify-center', className)}
          style={{
            opacity: disabled ? 0.5 : 1,
            background: getBackgroundColor(),
            border: '1px solid #000000',
            borderRadius: '0px',
            color: '#000000',
            fontWeight: 'bold',
            cursor: 'inherit', // Erbt vom Container
            padding: currentSize.padding,
            fontSize: currentSize.fontSize,
            transform: getTransform(),
            boxShadow: getBoxShadow(),
            transition: 'transform 0.1s ease, background-color 0.1s ease, box-shadow 0.1s ease',
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
