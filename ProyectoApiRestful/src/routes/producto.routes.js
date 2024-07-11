// routes/producto.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as productoController } from "./../controllers/producto"; // Asegúrate de importar los métodos correctos desde el controlador de producto

const router = Router();

// Rutas para la tabla de producto
router.get("/api/productos", productoController.getProductos);
router.post("/api/productos", productoController.crearProducto);
router.put("/api/productos/:id", productoController.actualizarProducto);
router.delete("/api/productos/:id", productoController.eliminarProducto);

export default router;
