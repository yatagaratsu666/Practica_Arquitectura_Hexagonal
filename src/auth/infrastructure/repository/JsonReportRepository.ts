import JsonReportDBC from "../../../shared/infrastructure/dbc/reports/ReportDBC"
import JsonReportRepositoryPort from "../../domain/port/driven/adapter/repository/JsonReportRepositoryPort"

export default class JsonReportRepository implements JsonReportRepositoryPort{
  constructor(private readonly reportDBC: JsonReportDBC) {}

  async saveReport(reporte: any): Promise<void> {
    await this.reportDBC.saveReport(reporte)
  }

  async getReportByDate(fecha: string): Promise<any | null> {
    const reportes = this.reportDBC.getReportsByDate(fecha)
    return reportes.length > 0 ? reportes[0] : null
  }
}
