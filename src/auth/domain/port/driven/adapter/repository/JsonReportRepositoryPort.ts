export default interface JsonReportRepositoryPort {
  saveReport(reporte: any): Promise<void>
  getReportByDate(fecha: string): Promise<any | null>
}
