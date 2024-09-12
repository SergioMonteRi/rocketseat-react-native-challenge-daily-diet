import { View } from 'react-native'
import styled, { css } from 'styled-components/native'

import { handleBackgroundColor } from '@utils/handleBackgroundColor'

import { ComponentColorStyle } from 'src/types/colors'
import { MetricCardsContainerProps } from './types'

export const Container = styled(View)<ComponentColorStyle>`
  flex: 1;
  flex-direction: column;

  background-color: ${({ theme, type }) => handleBackgroundColor(theme, type)};
`
export const ContentContainer = styled.View`
  flex: 1;

  padding: 32px 24px;
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

export const MetricCardsContainer = styled.View<MetricCardsContainerProps>`
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: 12px;
`
export const MetricCardWrapper = styled.View`
  flex: 1;
`
