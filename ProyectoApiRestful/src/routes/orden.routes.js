// routes/detallecompra.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as ordenController } from "./../controllers/orden"; // Asegúrate de importar los métodos correctos desde el controlador de orden

const router = Router();

// Rutas para la tabla de orden
router.get("/api/ordenes", ordenController.getOrdenes);
router.post("/api/ordenes", ordenController.crearOrden);
router.put("/api/ordenes/:id", ordenController.actualizarEstadoOrden);
router.delete("/api/ordenes/:id", ordenController.eliminarOrden);

export default router;
