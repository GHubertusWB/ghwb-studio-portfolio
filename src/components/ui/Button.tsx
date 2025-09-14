import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'primary' | 'secondary' | 'accent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    iconPosition = 'left',
    children, 
    icon,
    disabled = false,
    ...props 
  }, ref) => {
    
    // Base styles - immer angewendet
    const baseStyles = cn(
      // Basic layout
      "inline-flex items-center justify-center gap-2 rounded-[50px] overflow-hidden",
      "font-semibold font-['Inter'] transition-all duration-200 ease-in-out",
      // Cursor behavior
      disabled 
        ? "cursor-not-allowed" 
        : "cursor-pointer",
      // Focus states
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      // Hover and active transforms
      !disabled && "hover:scale-[1.02] active:scale-[0.98]"
    );

    // Size variants
    const sizeVariants = {
      xs: "px-3 py-2 text-xs leading-none gap-2",
      sm: "px-5 py-2.5 text-sm leading-tight gap-3", 
      md: "px-5 py-3 text-base leading-normal gap-3",
      lg: "px-6 py-3.5 text-base leading-normal gap-3",
      icon: "p-4 text-base" // Nur für Icon-only buttons
    };

    // Variant styles
    const variantStyles = {
      // Default - neutral gray background
      default: disabled 
        ? "bg-neutral-200/30 text-gray-400"
        : cn(
            "bg-neutral-200/50 text-gray-500",
            "hover:bg-neutral-200/70 hover:text-gray-600",
            "active:bg-neutral-200/80",
            "focus:ring-gray-300"
          ),
      
      // Outline - border with transparent background
      outline: disabled
        ? "outline outline-2 outline-gray-200 text-gray-400 bg-transparent"
        : cn(
            "outline outline-[3px] outline-sky-200 text-gray-900 bg-transparent",
            "hover:outline-sky-300 hover:bg-sky-50/50",
            "active:outline-sky-400 active:bg-sky-50/70",
            "focus:ring-sky-300"
          ),
      
      // Ghost - minimal styling
      ghost: disabled
        ? "text-gray-400 bg-transparent"
        : cn(
            "text-gray-900 bg-transparent",
            "hover:bg-gray-100/50",
            "active:bg-gray-100/70",
            "focus:ring-gray-300"
          ),
      
      // Primary - cyan accent color
      primary: disabled
        ? "bg-cyan-200/30 text-gray-400"
        : cn(
            "bg-cyan-500/50 text-gray-900",
            "hover:bg-cyan-500/60 hover:shadow-lg",
            "active:bg-cyan-500/70",
            "focus:ring-cyan-300"
          ),
      
      // Secondary - cyan with outline
      secondary: disabled
        ? "bg-cyan-200/20 outline outline-1 outline-cyan-200/30 text-gray-400"
        : cn(
            "bg-cyan-500/20 outline outline-1 outline-offset-[-1px] outline-cyan-500/50 text-gray-900",
            "hover:bg-cyan-500/30 hover:outline-cyan-500/60",
            "active:bg-cyan-500/40",
            "focus:ring-cyan-300"
          ),
      
      // Accent - cyan outline only
      accent: disabled
        ? "outline outline-1 outline-cyan-200/30 text-gray-400 bg-transparent"
        : cn(
            "outline outline-1 outline-offset-[-1px] outline-cyan-500/50 text-gray-900 bg-transparent",
            "hover:outline-cyan-500/60 hover:bg-cyan-50/30",
            "active:outline-cyan-500/70 active:bg-cyan-50/50",
            "focus:ring-cyan-300"
          )
    };

    // Icon size based on button size
    const getIconSize = (size: string) => {
      switch (size) {
        case 'xs': return 'w-3 h-3';
        case 'sm': return 'w-4 h-4';
        case 'md': return 'w-5 h-5';
        case 'lg': return 'w-5 h-5';
        case 'icon': return 'w-5 h-5';
        default: return 'w-5 h-5';
      }
    };

    // Content rendering based on icon position
    const renderContent = () => {
      if (!icon && !children) {
        return null;
      }

      if (!icon) {
        return <span className="justify-start">{children}</span>;
      }

      const iconElement = icon as React.ReactElement<any>;
      const iconWithSize = React.cloneElement(iconElement, {
        className: cn(getIconSize(size), iconElement.props?.className)
      });

      if (size === 'icon' || !children) {
        return iconWithSize;
      }

      if (iconPosition === 'right') {
        return (
          <>
            <span className="justify-start">{children}</span>
            {iconWithSize}
          </>
        );
      }

      return (
        <>
          {iconWithSize}
          <span className="justify-start">{children}</span>
        </>
      );
    };

    return (
      <button
        className={cn(
          baseStyles,
          sizeVariants[size],
          variantStyles[variant],
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;
