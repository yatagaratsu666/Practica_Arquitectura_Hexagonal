import JsonReportDBC from "../../../shared/infrastructure/dbc/reports/ReportDBC"
import ReporteServiceInterface from "../../domain/interfaces/ReporteServiceInterface"
import JsonReportRepositoryPort from "../../domain/port/driven/adapter/repository/JsonReportRepositoryPort"

export default class ReporteService implements ReporteServiceInterface{
  constructor(private readonly reporteRepository: JsonReportRepositoryPort) {}

  async saveReport(reporte: any): Promise<void> {
     return this.reporteRepository.saveReport(reporte)
  }

  async getReportByDate(fecha: string): Promise<any | null> {
    return this.reporteRepository.getReportByDate(fecha)
  }
}