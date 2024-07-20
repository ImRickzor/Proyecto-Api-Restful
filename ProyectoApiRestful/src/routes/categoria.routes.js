// routes/categoria.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as categoriaController } from "./../controllers/categoria"; // Asegúrate de importar los métodos correctos desde el controlador de categorías
import validateToken from '../middleware/validateToken';

const router = Router();

// Rutas para la tabla de categorías
router.get("/api/categorias",validateToken, categoriaController.getCategorias);
router.post("/api/categorias",validateToken, categoriaController.crearCategoria);
router.put("/api/categorias/:id",validateToken, categoriaController.actualizarCategoria);
router.delete("/api/categorias/:id",validateToken, categoriaController.eliminarCategoria);

export default router;