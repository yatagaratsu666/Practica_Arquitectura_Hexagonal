import Movimiento from "../../../model/movimiento/Movimiento";
import TipoMovimiento from "../../../model/movimiento/TipoMovimiento";

export default interface MovimientoUseCasePort {

  execute(
    codigoProducto: string,
    tipoMovimiento: TipoMovimiento,
    usuarioId: string
  ): Promise<Movimiento>
}
