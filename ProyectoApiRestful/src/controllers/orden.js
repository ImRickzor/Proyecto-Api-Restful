// controllers/orden.js

// Importa la conexión a la base de datos
import { getConnection } from "./../database/database";

// Obtener todas las órdenes
const getOrdenes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM Orden");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear una nueva orden
const crearOrden = async (req, res) => {
    try {
        const { ClienteID, FechaOrden, Estado } = req.body;
        if (!ClienteID || !FechaOrden || !Estado) {
            res.status(400).json({ message: "Por favor, completa todos los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "INSERT INTO Orden (ClienteID, FechaOrden, Estado) VALUES (?, ?, ?)",
            [ClienteID, FechaOrden, Estado]
        );

        res.status(201).json({ message: "Orden creada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar el estado de una orden
const actualizarEstadoOrden = async (req, res) => {
    try {
        const { id, estado } = req.body;
        if (!id || !estado) {
            res.status(400).json({ message: "Por favor, proporciona el ID de la orden y el nuevo estado." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "UPDATE Orden SET Estado = ? WHERE ID = ?",
            [estado, id]
        );

        res.status(200).json({ message: "Estado de la orden actualizado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar una orden
const eliminarOrden = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM Orden WHERE ID = ?", [id]);
        res.status(200).json({ message: "Orden eliminada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getOrdenes,
    crearOrden,
    actualizarEstadoOrden,
    eliminarOrden,
};
