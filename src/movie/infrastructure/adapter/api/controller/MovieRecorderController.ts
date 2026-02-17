import AbstractMovieController from "../../../../domain/api/AbstractMovieController";
import MovieUseCasePort from "../../../../domain/port/driver/usecase/MovieUseCasePort";
import { Request, Response} from 'express'

export default class MovieRecorderController extends AbstractMovieController{
    constructor(private readonly movieUseCase: MovieUseCasePort) {
        super()
    }

      readonly create = async (req: Request, res: Response): Promise<void> => {
        const movieData = req.body;
    
        const requiredFields = [
          "title",
          "synopsis",
          "release",
          "clasification",
          "genre",
          "characters",
          "director",
          "producers",
          "studio",
        ];
    
        if (!movieData || Object.keys(movieData).length === 0) {
          res
            .status(this.HTTPStatusCode.BAD_REQUEST)
            .json({ error: "Movie data must be provided" });
          return;
        }
    
        const missingFields = requiredFields.filter((field) => !movieData[field]);
    
        if (missingFields.length > 0) {
          res.status(this.HTTPStatusCode.BAD_REQUEST).json({
            error: `Missing required fields: ${missingFields.join(", ")}`,
          });
          return;
        }
    
        try {
          const newMovie = await this.movieUseCase.register(movieData);
          res.status(this.HTTPStatusCode.CREATED).json(newMovie);
        } catch (error) {
          console.error("Internal Server Error: create ", error);
          res
            .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
            .json({ error: "Internal Server Error" });
        }
      };
}