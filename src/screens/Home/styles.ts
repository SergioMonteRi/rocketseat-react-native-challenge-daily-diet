import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 38px;
`
export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
`

export const Title = styled.Text`
  margin-top: 32px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
export const ListHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 8px;
  margin-top: 32px;
`
