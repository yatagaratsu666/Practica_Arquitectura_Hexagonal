import TipoMovimiento from "./TipoMovimiento";

export default class Movimiento {
  protected id: string;
  protected codigoProducto: string;
  protected tipoMovimiento: TipoMovimiento;
  protected timestamp: string;
  protected usuarioId: string;
  public isNull: boolean;

  constructor(data: MovimientoInterface) {
    this.id = data.id;
    this.codigoProducto = data.codigoProducto;
    this.tipoMovimiento = data.tipoMovimiento;
    this.timestamp = data.timestamp;
    this.usuarioId = data.usuarioId;
    this.isNull = false;
  }

  getId(): string {
    return this.id;
  }

  getCodigoProducto(): string {
    return this.codigoProducto;
  }

  getTipoMovimiento(): TipoMovimiento {
    return this.tipoMovimiento;
  }

  getTimestamp(): string {
    return this.timestamp;
  }

  getUsuarioId(): string{
    return this.usuarioId;
  }

  setCodigoProducto(codigo: string): void {
    this.codigoProducto = codigo;
  }

  setTipoMovimiento(tipo: TipoMovimiento): void {
    this.tipoMovimiento = tipo;
  }

  setTimestamp(timestamp: string): void {
    this.timestamp = timestamp;
  }

  setUsuarioId(usuarioId: string): void {
    this.usuarioId = usuarioId;
  }
}

export interface MovimientoInterface {
  id: string;
  codigoProducto: string;
  tipoMovimiento: TipoMovimiento;
  timestamp: string;
  usuarioId: string;
}
