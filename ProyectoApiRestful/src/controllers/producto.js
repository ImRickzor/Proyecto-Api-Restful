// controllers/producto.js

// Importa la conexión a la base de datos
import { getConnection } from "./../database/database";

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM producto");
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, cantidadEnStock, categoriaID } = req.body;
        if (!nombre || !precio || !cantidadEnStock || !categoriaID) {
            res.status(400).json({ message: "Por favor, completa todos los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "INSERT INTO producto (nombre, descripcion, precio, cantidadEnStock, categoriaID) VALUES (?, ?, ?, ?, ?)",
            [nombre, descripcion, precio, cantidadEnStock, categoriaID]
        );

        res.status(201).json({ message: "Producto registrado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar información de un producto existente
const actualizarProducto = async (req, res) => {
    try {
        const { id, nombre, descripcion, precio, cantidadEnStock, categoriaID } = req.body;
        if (!id || !nombre || !precio || !cantidadEnStock || !categoriaID) {
            res.status(400).json({ message: "Por favor, completa todos los campos obligatorios." });
            return;
        }

        const connection = await getConnection();
        await connection.query(
            "UPDATE producto SET nombre = ?, descripcion = ?, precio = ?, cantidadEnStock = ?, categoriaID = ? WHERE id = ?",
            [nombre, descripcion, precio, cantidadEnStock, categoriaID, id]
        );

        res.status(200).json({ message: "Información del producto actualizada exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM producto WHERE id = ?", [id]);
        res.status(200).json({ message: "Producto eliminado exitosamente." });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};
