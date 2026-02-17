import { Request, Response } from "express";
import ReporteUseCasePort from "../../../../domain/port/driver/usecase/ReporteUseCasePort";
import AbstractReporteController from "../../../../domain/api/AbstractReporteController";

export default class ReporteController extends AbstractReporteController{
  constructor(private readonly reporteUseCase: ReporteUseCasePort) {
    super()
  }

  async diario(req: Request, res: Response) {
    try {
      const fecha = req.query.fecha as string;
      if (!fecha) {
        return res.status(400).json({ error: "La fecha es requerida" });
      }

      const reporte = await this.reporteUseCase.execute(fecha);
      return res.status(200).json(reporte);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
