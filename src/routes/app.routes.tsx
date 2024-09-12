import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Metrics } from '@screens/Metrics'
import { CreateMeal } from '@screens/CreateMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="createMeal" component={CreateMeal} />

      <Screen name="metrics" component={Metrics} />
    </Navigator>
  )
}
