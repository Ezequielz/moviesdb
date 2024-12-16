import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster';


interface Props {
    movies: Movie[];
    title: string;
    className?: string
}


const MovieHorizontalList = ({ movies, title, className }: Props) => {
    return (
        <View className={` ${className} `}>
            {title &&
                <Text className='text-3xl font-bold px-4 mb-2'> {title}  </Text>
            }

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <MoviePoster
                        id={item.id}
                        poster={item.poster}
                        smallPoster
                    />
                }
            />
        </View>
    )
}

export default MovieHorizontalList