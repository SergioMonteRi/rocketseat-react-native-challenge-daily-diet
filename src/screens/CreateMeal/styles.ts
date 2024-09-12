import { View } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
`
export const ContentContainer = styled.View`
  flex: 1;

  padding: 32px 24px;
  row-gap: 12px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`
