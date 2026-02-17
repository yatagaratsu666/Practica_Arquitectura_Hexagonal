import AbstractMovieRouter from "../../../../domain/api/AbstractMovieRouter";
import MovieContoller from "../controller/MovieController";
import MovieRecorderController from "../controller/MovieRecorderController";
import MovieSeekerController from "../controller/MovieSeekerController";

export default class MovieRouter extends AbstractMovieRouter{
    constructor(
        private readonly movieController: MovieContoller,
        private readonly movieSeekerController: MovieSeekerController,
        private readonly movieRecorderController: MovieRecorderController
    ){
        super('/movies-data')
        this.routes()
    }

    protected override routes = (): void => {
       this.movieRoutes()
       this.listRoutes()
    }

    private readonly movieRoutes = (): void =>{
        this.router.get('/movie/:id', this.movieController.getById)
        this.router.post('/movie', this.movieRecorderController.create)
    }

    private readonly listRoutes = (): void =>{
        this.router.get('/list/:id', this.movieController.getByIdList)
        this.router.get('/list/', this.movieSeekerController.search)
    }
}