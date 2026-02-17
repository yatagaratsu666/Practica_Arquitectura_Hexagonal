import Movimiento from "../model/movimiento/Movimiento";
import TipoMovimiento from "../model/movimiento/TipoMovimiento";

export default interface MovimientoServiceInterface {
    save(movimiento: Movimiento): Promise<Movimiento>
    getAll(): Movimiento[]
}