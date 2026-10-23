import {Navigate,Outlet} from 'react-router-dom';import {useTienda} from '../context/TiendaContext';
export default function RutaPrivada(){const {sesion}=useTienda();return sesion?.rol==='admin'?<Outlet/>:<Navigate to="/login" replace/>}
