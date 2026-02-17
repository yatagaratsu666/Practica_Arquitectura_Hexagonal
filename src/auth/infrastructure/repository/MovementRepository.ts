import Movimiento from "../../domain/model/movimiento/Movimiento";
import MovementRepositoryPort from "../../domain/port/driven/adapter/repository/MovementRepositoryPort";

export default class InMemoryMovementRepository implements MovementRepositoryPort{
  private movimientos: Movimiento[] = [];

  async save(movimiento: Movimiento): Promise<Movimiento> {
    this.movimientos.push(movimiento);
    return movimiento;
  }

  getAll(): Movimiento[] {
    return this.movimientos;
  }
}
