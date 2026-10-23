import { describe, it, expect } from 'vitest';
import { filtrarServicios, precioTotal, validarProducto, validarRegistro } from './tienda';

// Arrange común: catálogo de ejemplo
const productos = [
  { id: 1, nombre: 'Control de peso', descripcion: 'salud', categoria: 'Peso', precio: 25000 },
  { id: 2, nombre: 'Deporte', descripcion: 'deportiva', categoria: 'Deporte', precio: 30000 },
];
const servicioValido = { codigo: '1', nombre: 'uno', descripcion: 'algo', precio: 100, stock: 2, categoria: 'Peso' };
const registroValido = { nombre: 'Ana', run: '123456785', correo: 'ana@gmail.com', password: '12345678', confirmar: '12345678', region: 'R', comuna: 'C', objetivo: 'Salud' };

describe('Carrito (precioTotal)', () => {
  it('calcula el carrito vacío', () => {
    const items = [];                                   // Arrange
    const total = precioTotal(items, productos);        // Act
    expect(total).toBe(0);                              // Assert
  });

  it('calcula dos sesiones', () => {
    const items = [{ id: 1, cantidad: 2 }];
    const total = precioTotal(items, productos);
    expect(total).toBe(50000);
  });

  it('suma diferentes servicios', () => {
    const items = [{ id: 1, cantidad: 1 }, { id: 2, cantidad: 1 }];
    const total = precioTotal(items, productos);
    expect(total).toBe(55000);
  });

  it('no cobra un servicio inexistente', () => {
    const items = [{ id: 100, cantidad: 1 }];
    const total = precioTotal(items, productos);
    expect(total).toBe(0);
  });
});

describe('Catálogo de servicios (filtrarServicios)', () => {
  it('filtra por texto ignorando mayúsculas', () => {
    const texto = 'PESO';
    const resultado = filtrarServicios(productos, texto);
    expect(resultado).toHaveLength(1);
  });

  it('filtra por categoría', () => {
    const categoria = 'Deporte';
    const resultado = filtrarServicios(productos, '', categoria);
    expect(resultado[0].id).toBe(2);
  });

  it('retorna todos sin filtros', () => {
    const resultado = filtrarServicios(productos, '', 'Todas');
    expect(resultado).toHaveLength(2);
  });
});

describe('Panel de control (validarProducto)', () => {
  it('rechaza un servicio sin nombre', () => {
    const datos = { ...servicioValido, nombre: '' };
    const error = validarProducto(datos);
    expect(error).not.toBe('');
  });

  it('rechaza precios negativos', () => {
    const datos = { ...servicioValido, precio: -1 };
    const error = validarProducto(datos);
    expect(error).toContain('precio');
  });

  it('acepta un servicio válido', () => {
    const error = validarProducto(servicioValido);
    expect(error).toBe('');
  });
});

describe('Registro de paciente (validarRegistro)', () => {
  it('rechaza contraseñas diferentes', () => {
    const datos = { ...registroValido, confirmar: '12345679' };
    const error = validarRegistro(datos);
    expect(error).toContain('coinciden');
  });

  it('acepta registro con objetivo nutricional', () => {
    const error = validarRegistro(registroValido);
    expect(error).toBe('');
  });

  it('rechaza nombres con números', () => {
    // Arrange
    const datos = { ...registroValido, nombre: 'Ana123' };
    // Act
    const error = validarRegistro(datos);
    // Assert
    expect(error).toContain('nombre válido');
  });

  it('rechaza correos con formato inválido', () => {
    // Arrange
    const datos = { ...registroValido, correo: 'ana-sin-arroba' };
    // Act
    const error = validarRegistro(datos);
    // Assert
    expect(error).toContain('Correo inválido');
  });

  it('rechaza contraseñas de menos de 8 caracteres', () => {
    // Arrange
    const datos = { ...registroValido, password: '1234567', confirmar: '1234567' };
    // Act
    const error = validarRegistro(datos);
    // Assert
    expect(error).toContain('al menos 8');
  });
});
