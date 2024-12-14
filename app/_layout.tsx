import { View, Text } from 'react-native'

import "../global.css";
import { nowPlayingAction } from '@/core/actions/movie/now-playing.action';


const RootLayout = () => {

  nowPlayingAction()
  return (
    <View>
      <Text className='text-3xl'>RootLayout</Text>
    </View>
  )
}

export default RootLayout