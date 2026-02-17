import { MovieFilter } from "../../domain/api/MovieFilter";
import Movie, { MovieInterface } from "../../domain/model/movie/Movie";
import NullMovie from "../../domain/model/movie/NullMovie";
import MovieUseCasePort from "../../domain/port/driver/usecase/MovieUseCasePort";

export default class MovieUseCase implements MovieUseCasePort {
    register = (_movie: Movie): Promise<Movie> => {
        return Promise.resolve(new NullMovie());
    }

    search = (_filter: MovieFilter): Promise<Movie[]> => {
        return Promise.resolve([new NullMovie()]);
    }

    getById = (_id: string): Promise<Movie> => {
        return Promise.resolve(new NullMovie());
    }

    getByIdList = (_list: string[]): Promise<Movie[]> => {
        return Promise.resolve([new NullMovie()]);
    }
}