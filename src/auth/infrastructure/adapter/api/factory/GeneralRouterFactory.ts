import AbstractGeneralRouter from "../../../../domain/api/AbstractGeneralRouter";
import AuthController from "../controller/AuthController";
import AuthRouter from "../router/GeneralRouter";
import InMemoryMovementRepository from "../../../repository/MovementRepository";
import RegistrarMovimientoUseCase from "../../../../application/usecase/MovimientoUseCase";
import ReporteController from "../controller/ReporteController";
import ReporteDiarioUseCase from "../../../../application/usecase/ReporteUseCase";
import JsonUserRepository from "../../../repository/JsonUserRepository";
import JsonUserDBC from "../../../../../shared/infrastructure/dbc/users/UserDBC";
import JsonReportDBC from "../../../../../shared/infrastructure/dbc/reports/ReportDBC";
import JsonReportRepository from "../../../repository/JsonReportRepository";
import MovementController from "../controller/MovementController";
import JwtConfig from "../../../../../shared/infrastructure/security/JwtConfig";
import LoginUseCase from "../../../../application/usecase/LoginUseCase";
import AuthService from "../../../../application/service/AuthService";
import JwtRepository from "../../../repository/JWTRepository";
import ReporteService from "../../../../application/service/ReporteService";
import MovimientoService from "../../../../application/service/MovimientoService";

export default class GeneralRouterFactory {
  static readonly create = (): AbstractGeneralRouter => {
    // Usuario
    const userDBC = JsonUserDBC.getInstance();
    const userRepository = new JsonUserRepository(userDBC);

    // Movimiento
    const movimientoRepository = new InMemoryMovementRepository();
    const movimientoService = new MovimientoService(movimientoRepository)
    const registrarMovimientoUseCase = new RegistrarMovimientoUseCase(
      movimientoService
    );
    const movementController = new MovementController(
      registrarMovimientoUseCase
    );

    // JWT
    const jwtConfig = JwtConfig.getInstance();
    const jwtRepository = new JwtRepository(jwtConfig);

    // Auth Service y Controller
    const userService = new AuthService(userRepository, jwtRepository);
    const loginUseCase = new LoginUseCase(userService, jwtRepository);
    const authController = new AuthController(loginUseCase);

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
    const authRouter = new AuthRouter(
      authController,
      movementController,
      reporteController
    );

    return authRouter;
  };
}
