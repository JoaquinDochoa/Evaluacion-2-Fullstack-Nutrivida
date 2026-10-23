import { Link } from 'react-router-dom';

// Componente propio y reutilizable, como en la estructura de tienda-react.
export default function Footer({ anio = 2026, nombre = 'Clínica Nutricional NutriVida' }) {
  return (
    <footer className="site-footer">
      <div className="footer-col"><p>© {anio} {nombre}. Todos los derechos reservados.</p></div>
      <div className="footer-col"><Link to="/nosotros">Nosotros</Link><Link to="/servicios">Servicios</Link><Link to="/contacto">Contacto</Link></div>
      <div className="footer-col"><p>Temuco, Región de La Araucanía</p></div>
    </footer>
  );
}
