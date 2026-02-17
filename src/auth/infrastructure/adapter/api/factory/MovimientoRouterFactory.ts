import AbstractGeneralRouter from "../../../../domain/api/AbstractGeneralRouter";
import InMemoryMovementRepository from "../../../repository/MovementRepository";
import RegistrarMovimientoUseCase from "../../../../application/usecase/MovimientoUseCase";
import MovementController from "../controller/MovementController";
import MovimientoService from "../../../../application/service/MovimientoService";
import MovimientoRouter from "../router/MovimientoRouter";
import AbstractMovimientoRouter from "../../../../domain/api/AbstractMovimientoRouter";

export default class MovimientoRouterFactory {
  static readonly create = (): AbstractMovimientoRouter => {
    // Movimiento
    const movimientoRepository = new InMemoryMovementRepository();
    const movimientoService = new MovimientoService(movimientoRepository)
    const registrarMovimientoUseCase = new RegistrarMovimientoUseCase(
      movimientoService
    );
    const movementController = new MovementController(
      registrarMovimientoUseCase
    );

    // Router
    const authRouter = new MovimientoRouter(
      movementController,
    );

    return authRouter;
  };
}
