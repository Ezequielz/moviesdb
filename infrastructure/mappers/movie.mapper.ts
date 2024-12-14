import { Result } from "../interfaces/movie-db-response";
import { Movie } from "../interfaces/movie.interface";




export class MovieMapper {

    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date( movie.release_date ),
            poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
            backdrop: movie.backdrop_path,
            rating: movie.vote_average
        }
    }


}