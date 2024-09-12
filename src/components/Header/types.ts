import { ComponentColorStyle } from 'src/types/colors'

export type HeaderProps = {
  number?: string
  description?: string
  backTitle?: string
  screenNameToBackNavigation?: 'home' | 'metrics' | 'createMeal'
  type: ComponentColorStyle['type']
}
