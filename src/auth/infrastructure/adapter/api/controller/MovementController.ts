import { Request, Response } from "express";
import TipoMovimiento from "../../../../domain/model/movimiento/TipoMovimiento";
import MovimientoUseCasePort from "../../../../domain/port/driver/usecase/MovimientoUseCasePort";
import AbstractMovimientoController from "../../../../domain/api/AbstractMovimientController";

export default class MovementController extends AbstractMovimientoController {
  constructor(private readonly registrarMovimientoUseCase: MovimientoUseCasePort) {
    super()
  }

  async registrar(req: Request, res: Response): Promise<void> {
    try {
      const { codigoProducto, tipoMovimiento } = req.body;

      if (!codigoProducto || !tipoMovimiento) {
        res.status(400).json({ error: "Código de producto y tipo de movimiento son obligatorios" });
        return;
      }

      const usuarioId = (req as any).userId; 

      const movimiento = await this.registrarMovimientoUseCase.execute(
        codigoProducto,
        tipoMovimiento as TipoMovimiento,
        usuarioId
      );

      res.status(201).json({
        movimientoId: movimiento.getId(),
        codigoProducto: movimiento.getCodigoProducto(),
        tipoMovimiento: movimiento.getTipoMovimiento(),
        timestamp: movimiento.getTimestamp(),
        usuarioId: movimiento.getUsuarioId(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
