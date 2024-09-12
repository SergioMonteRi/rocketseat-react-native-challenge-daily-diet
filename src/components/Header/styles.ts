import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

import { HeaderStylesProps } from './types'

export const Container = styled(SafeAreaView)<HeaderStylesProps>`
  align-items: center;

  padding-bottom: 24px;

  background-color: ${({ theme, type }) =>
    type === 'health'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'risk'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_300};
`

export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 6px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const BackButton = styled.TouchableOpacity`
  width: 100%;
  padding: 0px 24px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``
