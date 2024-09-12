import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

import { ComponentColorStyle } from 'src/types/colors'

import {
  handleBackArrowColor,
  handleBackgroundColor,
} from '@utils/handleBackgroundColor'

export const Container = styled(SafeAreaView)<ComponentColorStyle>`
  align-items: center;

  background-color: ${({ theme, type }) => handleBackgroundColor(theme, type)};

  padding: ${Platform.OS === 'android' ? '24px 0px' : '8px 0px 0px 0px'};
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

export const BackIcon = styled(ArrowLeft).attrs<ComponentColorStyle>(
  ({ theme, type }) => ({
    size: 32,
    color: handleBackArrowColor(theme, type),
  }),
)``
