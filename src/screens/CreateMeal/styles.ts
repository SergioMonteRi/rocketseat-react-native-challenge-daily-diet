import { View } from 'react-native'

import styled from 'styled-components/native'

import { ComponentColorStyle } from 'src/types/colors'
import { handleBackgroundColor } from '@utils/handleBackgroundColor'

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
