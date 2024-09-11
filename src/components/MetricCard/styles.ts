import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;

  align-items: center;
  padding: 20px 16px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
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
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`
