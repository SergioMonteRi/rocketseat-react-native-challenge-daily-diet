import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

import { handleBackgroundColor } from '@utils/handleBackgroundColor'

import { ComponentColorStyle } from 'src/types/colors'

export const Container = styled(TouchableOpacity)<ComponentColorStyle>`
  flex-grow: 1;
  align-items: center;

  border-radius: 8px;
  padding: 20px 16px;

  background-color: ${({ theme, type }) => handleBackgroundColor(theme, type)};
`

export const Icon = styled(ArrowUpRight).attrs<ComponentColorStyle>(
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
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 6px;
`

export const Description = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`
