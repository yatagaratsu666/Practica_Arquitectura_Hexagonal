export default interface ReporteServiceInterface {
  saveReport(reporte: any): Promise<void>
  getReportByDate(fecha: string): Promise<any | null>
}
