import React from 'react'

import { ListEmptyProps } from './types'

import { Container, Message } from './styles'

export const ListEmpty = (props: ListEmptyProps) => {
  const { message } = props

  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
