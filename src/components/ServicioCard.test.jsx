// @vitest-environment jsdom

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicioCard from './ServicioCard';

vi.mock('../context/TiendaContext', () => ({
  useTienda: () => ({
    favoritos: [],
    alternarFavorito: vi.fn(),
    agregarCarrito: vi.fn(),
  }),
}));

describe('Tarjeta de servicio (ServicioCard)', () => {
  it('muestra Agregado después de presionar Agregar', () => {
    // Arrange: renderizar el componente real con un servicio de ejemplo
    const servicio = {
      id: 1,
      nombre: 'Control de peso',
      precio: 25000,
      imagen: '/imagen-de-prueba.jpg',
    };
    render(
      <MemoryRouter>
        <ServicioCard servicio={servicio} />
      </MemoryRouter>
    );

    // Act: presionar el botón real de la tarjeta
    const boton = screen.getByRole('button', { name: 'Agregar' });
    fireEvent.click(boton);

    // Assert: comportamiento adicional esperado (todavía no implementado)
    expect(boton.textContent).toBe('Agregado');
  });
});
