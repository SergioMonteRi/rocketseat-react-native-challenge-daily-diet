import { TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

import { MetricCardContainerProps } from './types'

export const Container = styled(TouchableOpacity)<MetricCardContainerProps>`
  border-radius: 8px;

  /* min-height: 125px; */

  align-items: center;
  padding: 20px 16px;

  background-color: ${({ theme, type }) =>
    type === 'health'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'risk'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_200};
`

export const Icon = styled(ArrowUpRight).attrs<MetricCardContainerProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'health' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Number = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 6px;
`

export const Description = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`
