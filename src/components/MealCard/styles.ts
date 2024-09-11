import styled, { css } from 'styled-components/native'
import { MealStatus } from './types'
import { View } from 'react-native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 14px;

  flex-direction: row;
  align-items: center;
  column-gap: 12px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Separator = styled.View`
  width: 1px;
  height: 90%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Status = styled(View)<MealStatus>`
  height: 14px;
  width: 14px;
  border-radius: 100px;

  background-color: ${({ theme, isOndiet }) =>
    isOndiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
