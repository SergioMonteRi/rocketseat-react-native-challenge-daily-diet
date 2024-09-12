export type HeaderStylesProps = {
  type: 'health' | 'risk' | 'neutral'
}

export type HeaderProps = {
  number?: string
  description?: string
  backTitle?: string
  screenNameToBackNavigation?: 'home' | 'metrics' | 'createMeal'
  type: 'health' | 'risk' | 'neutral'
}
