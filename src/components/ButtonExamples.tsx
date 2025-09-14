'use client'

import { Button } from './ui/Button';
import { useTheme } from '@/contexts/ThemeContext';

// Beispiel für die Verwendung der Button-Komponente - basierend auf Figma-Design

const ButtonExamples = () => {
  const { theme } = useTheme();
  return (
    <div className="p-8 space-y-12 bg-background relative z-10">
      <div className="mb-4 text-sm text-muted-foreground">
        Current Theme: <span className="font-semibold">{theme}</span>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-foreground">Button Component Examples</h2>
      
      {/* Button Matrix - wie im Figma */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Complete Button Matrix</h3>
        
        {/* Alle Größen Header */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-muted-foreground">Variant / Size</div>
          <div className="text-sm font-medium text-muted-foreground text-center">XS</div>
          <div className="text-sm font-medium text-muted-foreground text-center">SM</div>
          <div className="text-sm font-medium text-muted-foreground text-center">BASE</div>
        </div>

        {/* Primary Row */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Primary</div>
          <Button variant="primary" size="xs">Button text</Button>
          <Button variant="primary" size="sm">Button text</Button>
          <Button variant="primary" size="base">Button text</Button>
        </div>

        {/* Secondary Row */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Secondary</div>
          <Button variant="secondary" size="xs">Button text</Button>
          <Button variant="secondary" size="sm">Button text</Button>
          <Button variant="secondary" size="base">Button text</Button>
        </div>

        {/* Tertiary Row */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Tertiary</div>
          <Button variant="tertiary" size="xs">Button text</Button>
          <Button variant="tertiary" size="sm">Button text</Button>
          <Button variant="tertiary" size="base">Button text</Button>
        </div>
      </section>

      {/* Icons Left */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Buttons with Icons Left</h3>
        
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Primary + Icon</div>
          <Button variant="primary" size="xs" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="primary" size="sm" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="primary" size="base" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Secondary + Icon</div>
          <Button variant="secondary" size="xs" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="secondary" size="sm" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="secondary" size="base" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Tertiary + Icon</div>
          <Button variant="tertiary" size="xs" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="tertiary" size="sm" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="tertiary" size="base" icon="left" iconElement={<CloudArrowDownIcon />}>Button text</Button>
        </div>
      </section>

      {/* Icons Right */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Buttons with Icons Right</h3>
        
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Primary + Icon</div>
          <Button variant="primary" size="xs" icon="right" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="primary" size="sm" icon="right" iconElement={<CloudArrowDownIcon />}>Button text</Button>
          <Button variant="primary" size="base" icon="right" iconElement={<CloudArrowDownIcon />}>Button text</Button>
        </div>
      </section>

      {/* Icon Only */}
      <section className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Icon Only Buttons</h3>
        
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="text-sm font-medium text-foreground">Icon Only</div>
          <Button variant="primary" size="xs" icon="only" iconElement={<CloudArrowDownIcon />} />
          <Button variant="primary" size="sm" icon="only" iconElement={<CloudArrowDownIcon />} />
          <Button variant="primary" size="base" icon="only" iconElement={<CloudArrowDownIcon />} />
        </div>
      </section>

      {/* Disabled States */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Disabled States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
          <Button variant="tertiary" disabled>Tertiary Disabled</Button>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Loading States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" loading>Loading Primary</Button>
          <Button variant="secondary" loading>Loading Secondary</Button>
          <Button variant="tertiary" loading>Loading Tertiary</Button>
          <Button variant="primary" loading icon="only" iconElement={<CloudArrowDownIcon />} />
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Interactive Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => alert('Primary button clicked!')}>Click me</Button>
          <Button variant="secondary" onClick={() => console.log('Secondary button clicked')} icon="left" iconElement={<CloudArrowDownIcon />}>Log to Console</Button>
          <Button variant="tertiary" onClick={() => window.open('https://example.com', '_blank')}>Open Link</Button>
        </div>
      </section>
    </div>
  );
};

// Beispiel Icon-Komponente (ersetze durch deine echten Icons)
const CloudArrowDownIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 9.586V4a1 1 0 011-1z" clipRule="evenodd" />
    <path d="M4 12a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
  </svg>
);

export default ButtonExamples;
