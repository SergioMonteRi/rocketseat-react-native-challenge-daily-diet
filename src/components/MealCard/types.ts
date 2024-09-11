import { TouchableOpacityProps } from 'react-native'

export type MealStatus = {
  isOndiet: boolean
}

export type MealCardProps = TouchableOpacityProps & {
  time: string
  title: string
  isOnDiet: boolean
}
