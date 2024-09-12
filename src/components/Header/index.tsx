import { useNavigation } from '@react-navigation/native'

import { HeaderProps } from './types'

import {
  Number,
  BackIcon,
  BackTitle,
  Container,
  BackButton,
  Description,
  BackContainer,
} from './styles'

export const Header = (props: HeaderProps) => {
  const { type, description, number, backTitle, screenNameToBackNavigation } =
    props

  const navigation = useNavigation()

  const handleBack = () => {
    screenNameToBackNavigation &&
      navigation.navigate(screenNameToBackNavigation)
  }

  return (
    <Container type={type}>
      <BackContainer>
        {screenNameToBackNavigation && (
          <BackButton onPress={handleBack}>
            <BackIcon />
          </BackButton>
        )}
        {backTitle && <BackTitle>{backTitle}</BackTitle>}
      </BackContainer>

      {number && <Number>{number}%</Number>}
      {description && <Description>{description}</Description>}
    </Container>
  )
}
