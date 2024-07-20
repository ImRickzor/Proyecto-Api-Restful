// routes/detallecompra.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as ordenController } from "./../controllers/orden"; // Asegúrate de importar los métodos correctos desde el controlador de orden
import validateToken from '../middleware/validateToken';

const router = Router();

// Rutas para la tabla de orden
router.get("/api/ordenes",validateToken, ordenController.getOrdenes);
router.post("/api/ordenes",validateToken, ordenController.crearOrden);
router.put("/api/ordenes/:id",validateToken, ordenController.actualizarEstadoOrden);
router.delete("/api/ordenes/:id",validateToken, ordenController.eliminarOrden);

export default router;
