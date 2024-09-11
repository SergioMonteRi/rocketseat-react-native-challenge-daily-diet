import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
export const Text = styled.Text`
  font-size: 64px;
  color: aliceblue;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
}))``
