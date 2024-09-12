import { Header } from '@components/Header'

import {
  Title,
  Container,
  ContentContainer,
  MetricCardWrapper,
  MetricCardsContainer,
} from './styles'

import { MetricsProps } from './types'
import { MetricCard } from '@components/MetricCard'

export const Metrics = (props: MetricsProps) => {
  const { isHealht } = props

  return (
    <Container>
      <Header
        number={'90,86'}
        description={'das refeições dentro da dieta'}
        type={'health'}
      />

      <ContentContainer>
        <Title>Estátisticas gerais</Title>

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

        <MetricCardsContainer>
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
