import { MetricCardProps } from './types'

import { Icon, Container, Number, Description } from './styles'

export const MetricCard = (props: MetricCardProps) => {
  const { number, description, type, hasIcon = false, ...rest } = props

  return (
    <Container type={type} {...rest}>
      {hasIcon && <Icon type={type} />}

      <Number>{number}</Number>

      <Description>{description}</Description>
    </Container>
  )
}
