import AbstractGeneralRouter from "../../../../domain/api/AbstractGeneralRouter";
import AuthController from "../controller/AuthController";
import MovementController from "../controller/MovementController";
import authMiddleware from "../middleware/AuthMiddleware";
import RoleMiddleware from "../middleware/RoleMiddleware";
import JwtProvider from "../../../../../shared/infrastructure/security/JwtConfig";
import ReporteController from "../controller/ReporteController";
import AbstractReporteRouter from "../../../../domain/api/AbstractReportRouter";

export default class ReporteRouter extends AbstractReporteRouter {
  private readonly roleMiddleware: RoleMiddleware;

  constructor(
    private readonly reporteController: ReporteController
  ) {
    super("/api/v1.0");

    const jwtProvider = new JwtProvider();
    this.roleMiddleware = new RoleMiddleware(jwtProvider);

    this.routes();
  }

  protected override routes(): void {

    this.router.get(
      "/inventario/reportes/diario",
      authMiddleware,
      this.roleMiddleware.checkRole(["inventory_manager", "administrator"]),
      (req, res) => this.reporteController.diario(req, res)
    );
  }
}
