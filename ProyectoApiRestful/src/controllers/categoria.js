// controllers/categoria.js

// Importa la conexión a la base de datos
import { getConnection } from "./../database/database";

// Obtener todas las categorías
const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categoria");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear una nueva categoría
const crearCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        if (!nombre || !descripcion) {
            res.status(400).json({ message: "Por favor, completa todos los campos." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)",
            [nombre, descripcion]
        );

        res.status(201).json({ message: "Categoría creada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar una categoría existente
const actualizarCategoria = async (req, res) => {
    try {
        const { id, nombre, descripcion } = req.body;
        if (!id || !nombre || !descripcion) {
            res.status(400).json({ message: "Por favor, completa todos los campos." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "UPDATE categoria SET nombre = ?, descripcion = ? WHERE id = ?",
            [nombre, descripcion, id]
        );

        res.status(200).json({ message: "Categoría actualizada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar una categoría
const eliminarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM categoria WHERE id = ?", [id]);
        res.status(200).json({ message: "Categoría eliminada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
};
