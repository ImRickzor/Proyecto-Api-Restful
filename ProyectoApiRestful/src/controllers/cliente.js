// controllers/cliente.js

// Importa la conexión a la base de datos
import { getConnection } from "./../database/database";

// Obtener todos los clientes
const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM cliente");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo cliente
const crearCliente = async (req, res) => {
    try {
        const { nombre, correoElectronico, telefono, direccionEnvio } = req.body;
        if (!nombre || !correoElectronico) {
            res.status(400).json({ message: "Por favor, completa los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "INSERT INTO cliente (nombre, correoElectronico, telefono, direccionEnvio) VALUES (?, ?, ?, ?)",
            [nombre, correoElectronico, telefono, direccionEnvio]
        );

        res.status(201).json({ message: "Cliente registrado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar información de un cliente existente
const actualizarCliente = async (req, res) => {
    try {
        const { id, nombre, correoElectronico, telefono, direccionEnvio } = req.body;
        if (!id || !nombre || !correoElectronico) {
            res.status(400).json({ message: "Por favor, completa los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "UPDATE cliente SET nombre = ?, correoElectronico = ?, telefono = ?, direccionEnvio = ? WHERE id = ?",
            [nombre, correoElectronico, telefono, direccionEnvio, id]
        );

        res.status(200).json({ message: "Información del cliente actualizada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar un cliente
const eliminarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM cliente WHERE id = ?", [id]);
        res.status(200).json({ message: "Cliente eliminado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
};
