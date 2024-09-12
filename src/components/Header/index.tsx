import { HeaderProps } from './types'

import { BackButton, BackIcon, Container, Description, Number } from './styles'
import { useNavigation } from '@react-navigation/native'

export const Header = (props: HeaderProps) => {
  const { type, description, number } = props

  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('home')
  }

  return (
    <Container type={type}>
      <BackButton onPress={handleBack}>
        <BackIcon />
      </BackButton>

      <Number>{number}%</Number>
      <Description>{description}</Description>
    </Container>
  )
}
