import { ButtonProps } from './types'

import { Container, Icon, Text } from './styles'

export const Button = (props: ButtonProps) => {
  const { iconName, title, ...rest } = props

  return (
    <Container {...rest}>
      <Icon name={iconName} />
      <Text>{title}</Text>
    </Container>
  )
}
