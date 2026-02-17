import { AbstractRouter } from "../../../api/API";

export default abstract class AbstractMovieRouter extends AbstractRouter{
    protected abstract routes(): void
}