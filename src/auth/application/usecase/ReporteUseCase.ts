import Movimiento from "../../domain/model/movimiento/Movimiento"
import User from "../../domain/model/user/User"
import ReporteUseCasePort from "../../domain/port/driver/usecase/ReporteUseCasePort"
import ReporteServiceInterface from "../../domain/interfaces/ReporteServiceInterface"
import AuthServiceInterface from "../../domain/interfaces/AuthServiceInterface"
import MovimientoServiceInterface from "../../domain/interfaces/MovimientoServiceInterface"

export default class ReporteDiarioUseCase implements ReporteUseCasePort {
  constructor(
    private readonly movimientoService: MovimientoServiceInterface,
    private readonly userService: AuthServiceInterface,
    private readonly reporteService: ReporteServiceInterface
  ) {}

  async execute(fecha: string): Promise<void> {
    const movimientos: Movimiento[] = this.movimientoService.getAll()

    const movimientosFiltrados = movimientos.filter((m) =>
      m.getTimestamp().startsWith(fecha)
    )

    const movimientosConUsuario = await Promise.all(
      movimientosFiltrados.map(async (m) => {
        const usuario: User = await this.userService.findById(m.getUsuarioId())
        return {
          codigoProducto: m.getCodigoProducto(),
          tipoMovimiento: m.getTipoMovimiento(),
          timestamp: m.getTimestamp(),
          usuarioId: m.getUsuarioId(),
          nombreUsuario: `${usuario.getNames()} ${usuario.getSurname()}`,
        }
      })
    )

    const reporte = {
      fechaReporte: fecha,
      movimientos: movimientosConUsuario,
    }

    await this.reporteService.saveReport(reporte)

    const reporteGuardado = await this.reporteService.getReportByDate(fecha)
    return reporteGuardado ?? reporte
  }
}
