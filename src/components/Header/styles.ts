import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

import { HeaderStylesProps } from './types'
import { Platform } from 'react-native'

export const Container = styled(SafeAreaView)<HeaderStylesProps>`
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'health'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'risk'
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_300};

  padding: ${Platform.OS === 'android' ? '24px 0px' : '0px'};
`

export const Number = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const BackContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  left: 0;
  z-index: 1;
  position: absolute;

  padding: 0px 24px;
`

export const BackTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
}))``
