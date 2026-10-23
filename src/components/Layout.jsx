import { mostrarErrorEnEspanol, limpiarErrorNativo } from '../utils/validacionNativa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTienda } from '../context/TiendaContext';
import { imagenes } from '../assets/imagenes';
import Header from './Header';
import Footer from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  const { salir } = useTienda();
  if (pathname.startsWith('/secretaria/')) return (
    <div className="admin-body" onInvalidCapture={mostrarErrorEnEspanol} onInputCapture={limpiarErrorNativo}>
      <aside className="admin-sidebar">
        <div className="admin-logo"><img src={imagenes.logo} alt="NutriVida"/><span>NutriVida Admin</span></div>
        <nav><ul>
          <li><Link to="/secretaria/home">Inicio</Link></li>
          <li><Link to="/secretaria/pacientes">Pacientes</Link></li>
          <li><Link to="/secretaria/servicios">Servicios</Link></li>
          <li><button onClick={salir}>Cerrar sesión</button></li>
        </ul></nav>
      </aside>
      <Outlet />
    </div>
  );
  return <div className="app-layout" onInvalidCapture={mostrarErrorEnEspanol} onInputCapture={limpiarErrorNativo}><Header /><div className="page-content"><Outlet /></div><Footer /></div>;
}
