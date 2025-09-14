import { Button } from './ui/Button';

// Beispiel für die Verwendung der Button-Komponente

const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Button Component Examples</h2>
      
      {/* Default Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Default Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button size="xs">Button text</Button>
          <Button size="sm">Button text</Button>
          <Button size="md">Button text</Button>
          <Button size="lg">Button text</Button>
        </div>
      </section>

      {/* Outline Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Outline Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="xs">Button text</Button>
          <Button variant="outline" size="sm">Button text</Button>
          <Button variant="outline" size="md">Button text</Button>
          <Button variant="outline" size="lg">Button text</Button>
        </div>
      </section>

      {/* Primary Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Primary Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="xs">Button text</Button>
          <Button variant="primary" size="sm">Button text</Button>
          <Button variant="primary" size="md">Button text</Button>
          <Button variant="primary" size="lg">Button text</Button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Secondary Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="xs">Button text</Button>
          <Button variant="secondary" size="sm">Button text</Button>
          <Button variant="secondary" size="md">Button text</Button>
          <Button variant="secondary" size="lg">Button text</Button>
        </div>
      </section>

      {/* Accent Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Accent Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="accent" size="xs">Button text</Button>
          <Button variant="accent" size="sm">Button text</Button>
          <Button variant="accent" size="md">Button text</Button>
          <Button variant="accent" size="lg">Button text</Button>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            size="md"
            icon={<CloudArrowDownIcon />}
          >
            Download
          </Button>
          <Button 
            variant="secondary" 
            size="md"
            icon={<CloudArrowDownIcon />}
            iconPosition="right"
          >
            Upload
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            icon={<CloudArrowDownIcon />}
          />
        </div>
      </section>

      {/* Disabled Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Disabled Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Default Disabled</Button>
          <Button variant="outline" disabled>Outline Disabled</Button>
          <Button variant="primary" disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
          <Button 
            variant="primary" 
            disabled
            icon={<CloudArrowDownIcon />}
          >
            With Icon Disabled
          </Button>
        </div>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            onClick={() => alert('Button clicked!')}
          >
            Click me
          </Button>
          <Button 
            variant="secondary"
            onClick={() => console.log('Secondary button clicked')}
            icon={<CloudArrowDownIcon />}
          >
            Log to Console
          </Button>
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
