// routes/detallecompra.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as detallecompraController } from "./../controllers/detallecompra"; // Asegúrate de importar los métodos correctos desde el controlador de detallecompra

const router = Router();

// Rutas para la tabla de detallecompra
router.get("/api/detallescompra", detallecompraController.getDetallesCompra);
router.post("/api/detallescompra", detallecompraController.crearDetalleCompra);
router.delete("/api/detallescompra/:id", detallecompraController.eliminarDetalleCompra);

export default router;
