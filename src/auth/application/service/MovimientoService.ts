import MovimientoServiceInterface from "../../domain/interfaces/MovimientoServiceInterface";
import Movimiento from "../../domain/model/movimiento/Movimiento";
import MovementRepositoryPort from "../../domain/port/driven/adapter/repository/MovementRepositoryPort";

export default class MovimientoService implements MovimientoServiceInterface {
  constructor(private readonly movimientoRepo: MovementRepositoryPort) {}

    async save(movimiento: Movimiento): Promise<Movimiento> {
      return this.movimientoRepo.save(movimiento)
    }
  
    getAll(): Movimiento[] {
      return this.movimientoRepo.getAll()
    }
}