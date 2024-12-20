import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();


  if (nowPlayingQuery.isLoading) {

    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );

  }




  return (
    <ScrollView >
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MovieApp</Text>

        {/* Carousel */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Populares */}
        <MovieHorizontalList
          title='Populares'
          movies={popularQuery.data ?? []}
          className='mb-5'
        />
        {/* Top Rated */}
        <MovieHorizontalList
          title='Mejor calificados'
          movies={topRatedQuery.data ?? []}
          className='mb-5'
        />
        {/* Upcoming */}
        <MovieHorizontalList
          title='Proximamente'
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
        {/* Upcoming */}
        <MovieHorizontalList
          title='Proximamente'
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen