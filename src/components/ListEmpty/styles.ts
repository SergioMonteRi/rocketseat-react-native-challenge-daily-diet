import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 28px;
  align-items: center;
`
export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
