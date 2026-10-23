import { Link, NavLink } from 'react-router-dom';
import { useTienda } from '../context/TiendaContext';
import { imagenes } from '../assets/imagenes';

export default function Header() {
  const { sesion, salir, carrito } = useTienda();
  const enlaces = [['/', 'Inicio'], ['/servicios', 'Servicios'], ['/nosotros', 'Nosotros'], ['/blog', 'Blog'], ['/contacto', 'Contacto']];
  return (
    <header className="site-header">
      <Link to="/" className="brand"><img src={imagenes.logo} alt="NutriVida"/><span className="site-name">NutriVida</span></Link>
      <nav className="main-nav" aria-label="Navegación principal"><ul>
        {enlaces.map(([ruta, nombre]) => <li key={ruta}><NavLink end to={ruta}>{nombre}</NavLink></li>)}
      </ul></nav>
      <div className="user-actions">
        <Link to="/carrito">Carrito ({carrito.reduce((total, item) => total + item.cantidad, 0)})</Link>
        <Link to="/perfil">Mi perfil</Link>
        {sesion ? <button onClick={salir}>Cerrar sesión</button> : <><Link to="/login">Iniciar sesión</Link><Link to="/registro">Registrarse</Link></>}
      </div>
    </header>
  );
}
