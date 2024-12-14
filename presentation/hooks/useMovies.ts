import { nowPlayingAction } from "@/core/actions/movie/now-playing.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // 24hs
    })



    return {
        nowPlayingQuery
    }


}