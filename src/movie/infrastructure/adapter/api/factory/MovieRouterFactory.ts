import MovieUseCase from "../../../../application/usecase/MovieUseCase";
import AbstractMovieRouter from "../../../../domain/api/AbstractMovieRouter";
import MovieContoller from "../controller/MovieController";
import MovieRecorderController from "../controller/MovieRecorderController";
import MovieSeekerController from "../controller/MovieSeekerController";
import MovieRouter from "../router/MovieRouter";

export default class MovieRouterFactory{
    static readonly create = (): AbstractMovieRouter => {
        const movieUseCase = new MovieUseCase()
        if(!movieUseCase){
            throw new Error ('Failde to create MovieUseCase')
        }

        const movieController = new MovieContoller(movieUseCase)
        if(!movieController){
            throw new Error('Failed to create MovieController')
        }

        const movieSeekerController = new MovieSeekerController(movieUseCase)
        if(!movieSeekerController){
            throw new Error('Failed to create MovieController')
        }

        const movieRecorderController = new MovieRecorderController(movieUseCase)
        if(!movieRecorderController){
            throw new Error('Failed to create MovieController')
        }

        const movieRouter = new MovieRouter(movieController, movieSeekerController, movieRecorderController)
        if(!movieRouter){
            throw new Error ('Failed to create MovieRouter')
        }

        return movieRouter
    }
}