import MovimientoServiceInterface from "../../domain/interfaces/MovimientoServiceInterface";
import Movimiento from "../../domain/model/movimiento/Movimiento";
import TipoMovimiento from "../../domain/model/movimiento/TipoMovimiento";
import MovimientoUseCasePort from "../../domain/port/driver/usecase/MovimientoUseCasePort";

export default class RegistrarMovimientoUseCase implements MovimientoUseCasePort {
  constructor( private readonly movimientoService: MovimientoServiceInterface) {}

  async execute(
    codigoProducto: string,
    tipoMovimiento: TipoMovimiento,
    usuarioId: string
  ): Promise<Movimiento> {
    const timestampColombia = new Date()
      .toLocaleString("sv-SE", { timeZone: "America/Bogota" })
      .replace(" ", "T");
    const movimiento = new Movimiento({
      id: `uuid-mov-${Math.floor(Math.random() * 1000000)}`,
      codigoProducto,
      tipoMovimiento,
      timestamp: timestampColombia,
      usuarioId,
    });

    return this.movimientoService.save(movimiento);
  }
}
