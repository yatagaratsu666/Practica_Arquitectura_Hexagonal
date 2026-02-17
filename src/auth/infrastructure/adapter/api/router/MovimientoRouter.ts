import MovementController from "../controller/MovementController";
import authMiddleware from "../middleware/AuthMiddleware"; // función
import RoleMiddleware from "../middleware/RoleMiddleware";
import JwtProvider from "../../../../../shared/infrastructure/security/JwtConfig";
import AbstractMovimientoRouter from "../../../../domain/api/AbstractMovimientoRouter";

export default class MovimientoRouter extends AbstractMovimientoRouter {
  private readonly roleMiddleware: RoleMiddleware;

  constructor(
    private readonly movementController: MovementController,
  ) {
    super("/api/v1.0");

    const jwtProvider = new JwtProvider();
    this.roleMiddleware = new RoleMiddleware(jwtProvider);

    this.routes();
  }

  protected override routes(): void {
    this.router.post(
      "/inventario/movimientos",
      authMiddleware,
      this.roleMiddleware.checkRole(["inventory_operator", "inventory_manager"]),
      (req, res) => this.movementController.registrar(req, res)
    );
  }
}
