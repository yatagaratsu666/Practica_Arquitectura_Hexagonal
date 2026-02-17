import Movimiento from "../../../../model/movimiento/Movimiento";

export default interface MovementRepositoryPort {
  save(movimiento: Movimiento): Promise<Movimiento>;
  getAll(): Movimiento[]
}
