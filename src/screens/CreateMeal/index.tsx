import React from 'react'
import { Header } from '@components/Header'
import { Container, ContentContainer } from './styles'

export const CreateMeal = () => {
  return (
    <Container type="neutral">
      <Header
        type="neutral"
        backTitle="Nova refeição"
        screenNameToBackNavigation="home"
      />

      <ContentContainer></ContentContainer>
    </Container>
  )
}
