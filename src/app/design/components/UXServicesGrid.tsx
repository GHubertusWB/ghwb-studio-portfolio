import type { LucideIcon } from 'lucide-react'
import { Compass, Search, LayoutGrid, Palette, Layers, Send } from 'lucide-react'

type AccentKey = 'cyan' | 'blue' | 'rose' | 'amber' | 'lime'

type ServiceGroup = {
  title: string
  accent: AccentKey
  icon: LucideIcon
  items: string[]
}

type UXServicesGridProps = {
  variant?: 'light' | 'dark'
}

const services: ServiceGroup[] = [
  {
    title: 'UX-Strategy',
    accent: 'cyan',
    icon: Compass,
    items: [
      'Planning',
      'Roadmapping',
      'Design Ops Workshops',
      'Product Field Canvas Workshops',
      'Accessibility Checks & Audits',
    ],
  },
  {
    title: 'UX-Research',
    accent: 'blue',
    icon: Search,
    items: [
      'UX-Audits',
      'User Journey Mapping',
      'User Interviews & Testing',
      'Heatmaps',
      'Usability Testing',
    ],
  },
  {
    title: 'UX-Concept',
    accent: 'rose',
    icon: LayoutGrid,
    items: [
      'Sitemaps & User Flows',
      'Navigationskonzepte',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    title: 'UI-Design',
    accent: 'amber',
    icon: Palette,
    items: [
      'Interface Design',
      'Infographic Design',
      'Prototyping',
    ],
  },
 {
    title: 'Design Systeme',
    accent: 'lime',
    icon: Layers,
    items: [
      'UI-Libraries',
      'Design Tokens',
      'Design System Erstellung & Pflege',
      'Interaction Guidelines',
      'Accessibility-Guidelines',
    ],
  },
  {
    title: 'Delivery & Handoff',
    accent: 'blue',
    icon: Send,
    items: [
      'Developer Handoff',
      'Specs & Annotations',
      'Design QA',
      'Release Support',
    ],
  },
]

const accentStyles: Record<AccentKey, { light: { icon: string }; dark: { icon: string } }> = {
  cyan: {
    light: { icon: 'text-cyan-600' },
    dark: { icon: 'text-cyan-200' },
  },
  blue: {
    light: { icon: 'text-blue-600' },
    dark: { icon: 'text-blue-200' },
  },
  rose: {
    light: { icon: 'text-rose-600' },
    dark: { icon: 'text-rose-200' },
  },
  amber: {
    light: { icon: 'text-amber-600' },
    dark: { icon: 'text-amber-200' },
  },
  lime: {
    light: { icon: 'text-lime-700' },
    dark: { icon: 'text-lime-200' },
  },
}

export default function UXServicesGrid({ variant = 'light' }: UXServicesGridProps) {
  const isDark = variant === 'dark'

  return (
    <section
      id="ux-services"
      className={`relative z-10 py-32 px-6 ${isDark ? '' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl font-semibold leading-tight tracking-tight mb-6 md:text-3xl ${isDark ? 'text-white' : 'text-foreground'}`}>
            UX/UI Services im Detail
          </h2>
          <p className={`text-xl leading-7 max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
            Strategie, Research, Konzeption und UI-Design – klar strukturiert und sofort greifbar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service) => {
            const accent = accentStyles[service.accent][isDark ? 'dark' : 'light']
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group relative"
              >
                <div className="py-6">
                  <div className="flex items-center gap-4">
                    <Icon className={`h-5 w-5 ${accent.icon}`} aria-hidden="true" />
                    <div>
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ul className={`mt-6 space-y-2 text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
