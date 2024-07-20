// routes/cliente.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as clienteController } from "./../controllers/cliente"; // Asegúrate de importar los métodos correctos desde el controlador de clientes
import validateToken from '../middleware/validateToken';

const router = Router();

// Rutas para la tabla de clientes
router.get("/api/clientes",validateToken, clienteController.getClientes);
router.post("/api/clientes",validateToken, clienteController.crearCliente);
router.put("/api/clientes/:id",validateToken, clienteController.actualizarCliente);
router.delete("/api/clientes/:id",validateToken, clienteController.eliminarCliente);

export default router;
