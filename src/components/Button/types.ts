import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

export type ButtonProps = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
  title: string
}
