import { AbstractController } from "../../../../../api/API";
import MovieUseCasePort from "../../../../domain/port/driver/usecase/MovieUseCasePort";
import { Request, Response} from 'express'

export default class MovieSeekerController extends AbstractController{
    constructor(private readonly movieUseCase: MovieUseCasePort){
        super()
    }

      readonly search = async (req: Request, res: Response): Promise<void> => {
    // implement search functionality
    const filter = req.query;
    if (!filter) {
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
      return;
    }

    try {
      const movies = await this.movieUseCase.search(filter);
      res.status(this.HTTPStatusCode.OK).json({ movies });
    } catch (error) {
      console.error("Internal Server Error: create ", error);
      res
        .status(this.HTTPStatusCode.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
  };
}