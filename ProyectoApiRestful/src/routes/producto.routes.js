// routes/producto.routes.js

import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as productoController } from "./../controllers/producto"; // Asegúrate de importar los métodos correctos desde el controlador de producto
import validateToken from '../middleware/validateToken';

const router = Router();

// Rutas para la tabla de producto
router.get("/api/productos", validateToken, productoController.getProductos);
router.post("/api/productos",validateToken,  productoController.crearProducto);
router.put("/api/productos/:id,",validateToken, productoController.actualizarProducto);
router.delete("/api/productos/:id",validateToken, productoController.eliminarProducto);

export default router;
