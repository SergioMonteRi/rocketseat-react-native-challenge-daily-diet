import styled from 'styled-components/native'

import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))``

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
