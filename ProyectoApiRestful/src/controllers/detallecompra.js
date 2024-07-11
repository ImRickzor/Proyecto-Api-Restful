// controllers/detallecompra.js

// Importa la conexión a la base de datos
import { getConnection } from "./../database/database";

// Obtener todos los detalles de compra
const getDetallesCompra = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM DetalleCompra");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo detalle de compra
const crearDetalleCompra = async (req, res) => {
    try {
        const { OrdenID, ProductoID, Cantidad, Total } = req.body;
        if (!OrdenID || !ProductoID || !Cantidad || !Total) {
            res.status(400).json({ message: "Por favor, completa todos los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "INSERT INTO DetalleCompra (OrdenID, ProductoID, Cantidad, Total) VALUES (?, ?, ?, ?)",
            [OrdenID, ProductoID, Cantidad, Total]
        );

        res.status(201).json({ message: "Detalle de compra registrado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar un detalle de compra
const eliminarDetalleCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM DetalleCompra WHERE ID = ?", [id]);
        res.status(200).json({ message: "Detalle de compra eliminado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getDetallesCompra,
    crearDetalleCompra,
    eliminarDetalleCompra,
};
