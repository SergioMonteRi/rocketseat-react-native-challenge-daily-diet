import { useNavigation } from '@react-navigation/native'

import images from '@constants/images'

import { Button } from '@components/Button'
import { MetricCard } from '@components/MetricCard'

import {
  SafeAreaContainer,
  Header,
  Logo,
  ProfilePicture,
  Title,
} from './styles'

export const Home = () => {
  const navigation = useNavigation()

  const handleCreateMeal = () => {
    navigation.navigate('createMeal')
  }

  return (
    <SafeAreaContainer>
      <Header>
        <Logo source={images.logo} />
        <ProfilePicture source={images.profilePhoto} />
      </Header>

      <MetricCard />

      <Title>Refeições</Title>

      <Button
        iconName={'add'}
        title={'Nova refeição'}
        onPress={handleCreateMeal}
      />
    </SafeAreaContainer>
  )
}
