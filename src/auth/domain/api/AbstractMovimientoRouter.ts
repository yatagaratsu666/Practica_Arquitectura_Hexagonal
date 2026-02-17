import { AbstractRouter } from "../../../api/API";

export default abstract class AbstractMovimientoRouter extends AbstractRouter{
    protected abstract routes(): void
}