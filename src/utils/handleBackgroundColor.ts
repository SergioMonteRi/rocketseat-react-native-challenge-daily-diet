import { DefaultTheme } from 'styled-components/native'

import { ComponentColorStyle } from 'src/types/colors'

export const handleBackgroundColor = (
  theme: DefaultTheme,
  type: ComponentColorStyle['type'],
) => {
  if (type === 'health') {
    return theme.COLORS.GREEN_LIGHT
  } else if (type === 'risk') {
    return theme.COLORS.RED_LIGHT
  } else {
    return theme.COLORS.GRAY_300
  }
}

export const handleBackArrowColor = (
  theme: DefaultTheme,
  type: ComponentColorStyle['type'],
) => {
  if (type === 'health') {
    return theme.COLORS.GREEN_DARK
  } else if (type === 'risk') {
    return theme.COLORS.RED_DARK
  } else {
    return theme.COLORS.GRAY_600
  }
}
