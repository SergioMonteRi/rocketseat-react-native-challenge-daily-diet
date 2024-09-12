import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
`
export const ContentContainer = styled.View`
  flex: 1;

  padding: 32px 24px;
  margin-top: -20px;
  row-gap: 12px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
  margin-bottom: 12px;
`

export const MetricCardsContainer = styled.View`
  flex-direction: row;
  column-gap: 12px;
`
export const MetricCardWrapper = styled.View`
  flex: 1;
`
