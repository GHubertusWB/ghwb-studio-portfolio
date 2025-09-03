export interface Principle {
  number: string
  title: string
  subtitle: string
  description: string
  keywords: string[]
  color: string
  bgColor: string
  pattern: string
}

export interface PhilosophyProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
  principles: Principle[]
  currentPrinciple: Principle
}
