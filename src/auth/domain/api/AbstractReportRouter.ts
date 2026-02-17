import { AbstractRouter } from "../../../api/API";

export default abstract class AbstractReporteRouter extends AbstractRouter{
    protected abstract routes(): void
}