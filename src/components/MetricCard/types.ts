import { TouchableOpacityProps } from 'react-native'

import { ComponentColorStyle } from 'src/types/colors'

export type MetricCardProps = TouchableOpacityProps & {
  number: string
  description: string
  hasIcon?: boolean
  type: ComponentColorStyle['type']
}
