// routes/categoria.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as categoriaController } from "./../controllers/categoria"; // Asegúrate de importar los métodos correctos desde el controlador de categorías

const router = Router();

// Rutas para la tabla de categorías
router.get("/api/categorias", categoriaController.getCategorias);
router.post("/api/categorias", categoriaController.crearCategoria);
router.put("/api/categorias/:id", categoriaController.actualizarCategoria);
router.delete("/api/categorias/:id", categoriaController.eliminarCategoria);

export default router;