import { TouchableOpacityProps } from 'react-native'

export type MetricCardContainerProps = {
  type: 'health' | 'risk' | 'neutral'
}

export type MetricCardProps = TouchableOpacityProps & {
  number: string
  description: string
  hasIcon?: boolean
  type: 'health' | 'risk' | 'neutral'
}
