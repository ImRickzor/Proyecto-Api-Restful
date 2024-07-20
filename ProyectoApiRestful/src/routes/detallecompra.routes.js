// routes/detallecompra.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as detallecompraController } from "./../controllers/detallecompra"; // Asegúrate de importar los métodos correctos desde el controlador de detallecompra
import validateToken from '../middleware/validateToken';

const router = Router();

// Rutas para la tabla de detallecompra
router.get("/api/detallescompra",validateToken, detallecompraController.getDetallesCompra);
router.post("/api/detallescompra",validateToken, detallecompraController.crearDetalleCompra);
router.delete("/api/detallescompra/:id",validateToken, detallecompraController.eliminarDetalleCompra);

export default router;
