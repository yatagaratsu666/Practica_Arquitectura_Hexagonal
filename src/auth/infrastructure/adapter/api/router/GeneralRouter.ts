import AbstractGeneralRouter from "../../../../domain/api/AbstractGeneralRouter";
import AuthController from "../controller/AuthController";
import MovementController from "../controller/MovementController";
import authMiddleware from "../middleware/AuthMiddleware"; // función
import RoleMiddleware from "../middleware/RoleMiddleware";
import JwtProvider from "../../../../../shared/infrastructure/security/JwtConfig";
import ReporteController from "../controller/ReporteController";

export default class GeneralRouter extends AbstractGeneralRouter {
  private readonly roleMiddleware: RoleMiddleware;

  constructor(
    private readonly authController: AuthController,
    private readonly movementController: MovementController,
    private readonly reporteController: ReporteController
  ) {
    super("/api/v1.0");

    const jwtProvider = new JwtProvider();
    this.roleMiddleware = new RoleMiddleware(jwtProvider);

    this.routes();
  }

  protected override routes(): void {
    this.router.post("/auth/login", (req, res) =>
      this.authController.login(req, res)
    );

    this.router.post(
      "/inventario/movimientos",
      authMiddleware,
      this.roleMiddleware.checkRole(["inventory_operator", "inventory_manager", "administrator"]),
      (req, res) => this.movementController.registrar(req, res)
    );

        this.router.get(
      "/inventario/reportes/diario",
      authMiddleware,
      this.roleMiddleware.checkRole(["inventory_manager", "administrator"]),
      (req, res) => this.reporteController.diario(req, res)
    );
  }
}
