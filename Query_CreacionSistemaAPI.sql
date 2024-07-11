-- Creación de la base de datos
CREATE DATABASE SistemaAPI;

-- Cambiar al contexto de la base de datos recién creada
USE SistemaAPI;

-- Tabla de Categorías
CREATE TABLE Categoria (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT
);

-- Tabla de Productos
CREATE TABLE Producto (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    CantidadEnStock INT NOT NULL,
    CategoriaID INT,
    FOREIGN KEY (CategoriaID) REFERENCES Categoria(ID)
);

-- Tabla de Clientes
CREATE TABLE Cliente (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    CorreoElectronico VARCHAR(255) NOT NULL,
    Telefono VARCHAR(20),
    DireccionEnvio TEXT
);

-- Tabla de Órdenes
CREATE TABLE Orden (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    FechaOrden DATETIME,
    Estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ID)
);

-- Tabla de Detalle de Compra
CREATE TABLE DetalleCompra (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    OrdenID INT,
    ProductoID INT,
    Cantidad INT NOT NULL,
	Total Decimal(10,2) not null,
    FOREIGN KEY (OrdenID) REFERENCES Orden(ID),
    FOREIGN KEY (ProductoID) REFERENCES Producto(ID)
);
