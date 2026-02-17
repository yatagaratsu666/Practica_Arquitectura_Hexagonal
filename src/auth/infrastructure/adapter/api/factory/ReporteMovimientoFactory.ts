import InMemoryMovementRepository from "../../../repository/MovementRepository";
import ReporteController from "../controller/ReporteController";
import ReporteDiarioUseCase from "../../../../application/usecase/ReporteUseCase";
import JsonUserRepository from "../../../repository/JsonUserRepository";
import JsonUserDBC from "../../../../../shared/infrastructure/dbc/users/UserDBC";
import JsonReportDBC from "../../../../../shared/infrastructure/dbc/reports/ReportDBC";
import JsonReportRepository from "../../../repository/JsonReportRepository";
import JwtConfig from "../../../../../shared/infrastructure/security/JwtConfig";
import AuthService from "../../../../application/service/AuthService";
import JwtRepository from "../../../repository/JWTRepository";
import ReporteService from "../../../../application/service/ReporteService";
import MovimientoService from "../../../../application/service/MovimientoService";
import ReporteRouter from "../router/ReporteRouter";
import AbstractReporteRouter from "../../../../domain/api/AbstractReportRouter";

export default class ReporteRouterFactory {
  static readonly create = (): AbstractReporteRouter => {
    // Usuario
    const userDBC = JsonUserDBC.getInstance();
    const userRepository = new JsonUserRepository(userDBC);

    // Movimiento
    const movimientoRepository = new InMemoryMovementRepository();
    const movimientoService = new MovimientoService(movimientoRepository)

    // JWT
    const jwtConfig = JwtConfig.getInstance();
    const jwtRepository = new JwtRepository(jwtConfig);

    // Auth Service y Controller
    const userService = new AuthService(userRepository, jwtRepository);

    // Reporte
    const reportDBC = JsonReportDBC.getInstance();
    const reportRepository = new JsonReportRepository(reportDBC);
    const reportService = new ReporteService(reportRepository)
    const reporteDiarioUseCase = new ReporteDiarioUseCase(
      movimientoService,
      userService,
      reportService
    );
    const reporteController = new ReporteController(reporteDiarioUseCase);

    // Router
    const reporteRouter = new ReporteRouter(
      reporteController
    );

    return reporteRouter;
  };
}
