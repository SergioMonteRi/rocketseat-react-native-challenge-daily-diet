/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */

import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from '@components/Loading'

import { Routes } from '@routes/index'

import theme from 'src/theme'

const NunitoSans_400Regular = require('./assets/fonts/NunitoSans-Regular.ttf')
const NunitoSans_700Bold = require('./assets/fonts/NunitoSans-Bold.ttf')

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
