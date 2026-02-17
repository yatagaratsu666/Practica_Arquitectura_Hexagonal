import Movimiento from "../../../model/movimiento/Movimiento";
import TipoMovimiento from "../../../model/movimiento/TipoMovimiento";

export default interface ReporteUseCasePort {

  execute(fecha: string): Promise<void>
}
