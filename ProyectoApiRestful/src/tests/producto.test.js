
import { methods as productoController } from '../controllers/producto';

test('Crea un nuevo producto correctamente', async () => {
  const req = {
    body: {
      nombre: 'Producto de prueba',
      descripcion: 'Descripción de prueba',
      precio: 10,
      cantidadEnStock: 100,
      categoriaID: 3,
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await productoController.crearProducto(req, res);

  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith({ message: 'Producto registrado exitosamente.' });
});


test('Obtiene una lista de productos correctamente', async () => {
  const req = {};
  const res = {
    json: jest.fn(),
  };

  await productoController.getProductos(req, res);

  // Verifica que res.json() haya sido llamado con los datos esperados
  expect(res.json).toHaveBeenCalledWith({CantidadEnStock:100,CategoriaID:3,
    Descripcion:'Descripcion de prueba',ID:1,Nombre:'Producto de prueba',Precio:10});
});

test('Actualiza la información de un producto correctamente', async () => {
    const req = {
        body: {
            id: 1,
            nombre: 'Producto actualizado',
            descripcion: 'Descripción actualizada',
            precio: 10,
            cantidadEnStock: 100,
            categoriaID: 3
            },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  
    await productoController.actualizarProducto(req, res);
  
    // Verifica que res.status() y res.json() hayan sido llamados con los valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Información del producto actualizada exitosamente.' });
  });

  test('Elimina un producto correctamente', async () => {
    const req = {
      params: {
        id: 1, // ID del producto a eliminar
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  
    await productoController.eliminarProducto(req, res);
  
    // Verifica que res.status() y res.json() hayan sido llamados con los valores esperados
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Producto eliminado exitosamente.' });
  });