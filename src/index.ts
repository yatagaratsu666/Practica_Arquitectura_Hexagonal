import ServerFactory from "./api/infrastructure/adapter/api/factory/ServerFactory";
import MovieRouterFactory from "./movie/infrastructure/adapter/api/factory/MovieRouterFactory";
import GeneralRouterFactory from "./auth/infrastructure/adapter/api/factory/GeneralRouterFactory";
import ReporteRouterFactory from "./auth/infrastructure/adapter/api/factory/ReporteMovimientoFactory";
import MovimientoRouterFactory from "./auth/infrastructure/adapter/api/factory/MovimientoRouterFactory";

const movieRouter = MovieRouterFactory.create();
const authRouter = GeneralRouterFactory.create();
const reportRouter = ReporteRouterFactory.create();
const movimientoRouter = MovimientoRouterFactory.create()

const server = ServerFactory.create([movieRouter, authRouter]);

server.start();
