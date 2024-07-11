// routes/cliente.routes.js
import {getConnection} from "./../database/database"
import { Router } from "express";
import { methods as clienteController } from "./../controllers/cliente"; // Asegúrate de importar los métodos correctos desde el controlador de clientes

const router = Router();

// Rutas para la tabla de clientes
router.get("/api/clientes", clienteController.getClientes);
router.post("/api/clientes", clienteController.crearCliente);
router.put("/api/clientes/:id", clienteController.actualizarCliente);
router.delete("/api/clientes/:id", clienteController.eliminarCliente);

export default router;
