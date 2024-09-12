import { SectionList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import images from '@constants/images'

import { Button } from '@components/Button'
import { MealCard } from '@components/MealCard'
import { ListEmpty } from '@components/ListEmpty'
import { MetricCard } from '@components/MetricCard'

import {
  SafeAreaContainer,
  Header,
  Logo,
  ProfilePicture,
  Title,
  ListHeaderTitle,
} from './styles'

export const Home = () => {
  const navigation = useNavigation()

  const DATA = [
    {
      title: '11.09.2024',
      data: [
        { time: '20:00', meal: 'Pizza', isOnDiet: false },
        { time: '16:00', meal: 'Whey protein com leite', isOnDiet: true },
      ],
    },
    {
      title: '12.09.2024',
      data: [
        { time: '20:00', meal: 'Pizza', isOnDiet: false },
        { time: '16:00', meal: 'Whey protein com leite', isOnDiet: true },
      ],
    },
    {
      title: '13.09.2024',
      data: [
        { time: '20:00', meal: 'Pizza', isOnDiet: false },
        { time: '16:00', meal: 'Whey protein com leite', isOnDiet: true },
      ],
    },
    {
      title: '14.09.2024',
      data: [
        { time: '20:00', meal: 'Pizza', isOnDiet: false },
        { time: '16:00', meal: 'Whey protein com leite', isOnDiet: true },
      ],
    },
  ]

  const handleCreateMeal = () => {
    navigation.navigate('createMeal')
  }

  const handleSeeMetrics = () => {
    navigation.navigate('metrics')
  }

  return (
    <SafeAreaContainer>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({ item }) => (
          <MealCard
            title={item.meal}
            time={item.time}
            isOnDiet={item.isOnDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <ListHeaderTitle>{title}</ListHeaderTitle>
        )}
        ListHeaderComponent={() => {
          return (
            <>
              <Header>
                <Logo source={images.logo} />
                <ProfilePicture source={images.profilePhoto} />
              </Header>

              <MetricCard
                number="90,86"
                description="das refeições dentro da dieta"
                type="health"
                onPress={handleSeeMetrics}
                hasIcon
              />

              <Title>Refeições</Title>

              <Button
                iconName={'add'}
                title={'Nova refeição'}
                onPress={handleCreateMeal}
              />
            </>
          )
        }}
        ListEmptyComponent={() => (
          <ListEmpty message={'Cadastre uma nova refeição'} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        contentContainerStyle={{ paddingBottom: 48, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaContainer>
  )
}
