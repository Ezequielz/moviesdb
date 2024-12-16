import { nowPlayingAction } from "@/core/actions/movie/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movie/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movie/top-rated.action"
import { upcomingMoviesAction } from "@/core/actions/movie/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24hs
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24hs
    })
    
    const topRatedQuery = useQuery({
        queryKey: ['movies', 'top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24hs
    })
    
    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcomig'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24 // 24hs
    })



    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    }


}