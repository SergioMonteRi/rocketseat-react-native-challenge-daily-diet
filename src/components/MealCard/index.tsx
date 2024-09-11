import { MealCardProps } from './types'

import { Container, Separator, Status, Time, Title } from './styles'

export const MealCard = (props: MealCardProps) => {
  const { time, title, isOnDiet } = props

  return (
    <Container>
      <Time>{time}</Time>
      <Separator />
      <Title>{title}</Title>
      <Status isOndiet={isOnDiet} />
    </Container>
  )
}
