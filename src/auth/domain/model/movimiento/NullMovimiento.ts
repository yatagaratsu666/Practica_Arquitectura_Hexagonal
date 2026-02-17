import Movimiento, { MovimientoInterface } from "./Movimiento";
import TipoMovimiento from "./TipoMovimiento";

export default class NullMovimiento extends Movimiento {
  constructor() {
    const nullMovimientoData: MovimientoInterface = {
      id: "0",
      codigoProducto: "Unknown",
      tipoMovimiento: TipoMovimiento.Unknown,
      timestamp: "Unknown",
      usuarioId: "0",
    };

    super(nullMovimientoData);
    this.isNull = true;
  }

  override setCodigoProducto = (_codigo: string): void => {
    throw new Error("Cannot set codigoProducto on NullMovimiento");
  };

  override setTipoMovimiento = (_tipo: TipoMovimiento): void => {
    throw new Error("Cannot set tipoMovimiento on NullMovimiento");
  };

  override setTimestamp = (_timestamp: string): void => {
    throw new Error("Cannot set timestamp on NullMovimiento");
  };

  override setUsuarioId = (_usuarioId: string): void => {
    throw new Error("Cannot set usuarioId on NullMovimiento");
  };
}
