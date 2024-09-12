import { Header } from '@components/Header'
import { MetricCard } from '@components/MetricCard'

import {
  Title,
  Container,
  ContentContainer,
  MetricCardWrapper,
  MetricCardsContainer,
} from './styles'

export const Metrics = () => {
  return (
    <Container type={'health'}>
      <Header
        number={'90,86'}
        description={'das refeições dentro da dieta'}
        type={'health'}
        screenNameToBackNavigation={'home'}
      />

      <ContentContainer>
        <Title>Estátisticas gerais</Title>

        <MetricCardsContainer flexDirection={'column'}>
          <MetricCard
            number={'22'}
            description={'melhor sequência de pratos dentro da dieta'}
            type={'neutral'}
            disabled
          />

          <MetricCard
            number={'109'}
            description={'refeições registradas'}
            type={'neutral'}
            disabled
          />
        </MetricCardsContainer>

        <MetricCardsContainer flexDirection={'row'}>
          <MetricCardWrapper>
            <MetricCard
              number={'99'}
              description={'refeições dentro da dieta'}
              type={'health'}
              disabled
            />
          </MetricCardWrapper>
          <MetricCardWrapper>
            <MetricCard
              number={'10'}
              description={'refeições fora da dieta'}
              type={'risk'}
              disabled
            />
          </MetricCardWrapper>
        </MetricCardsContainer>
      </ContentContainer>
    </Container>
  )
}
