import {Link} from 'react-router-dom';
import {formatearPrecio} from '../data/servicios';
import Boton from './Boton';
import {useTienda} from '../context/TiendaContext';
export default function ServicioCard({servicio}){const {favoritos,alternarFavorito,agregarCarrito}=useTienda();return <article className="card"><img src={servicio.imagen} alt={servicio.nombre}/><h3>{servicio.nombre}</h3><p className="precio">{formatearPrecio(servicio.precio)}</p><div className="card-actions"><Link className="btn btn-secondary" to={`/servicio-detalle?id=${servicio.id}`}>Ver más</Link><Boton onClick={()=>agregarCarrito(servicio.id)}>Agregar</Boton><Boton variant="secondary" aria-label="Alternar favorito" onClick={()=>alternarFavorito(servicio.id)}>{favoritos.includes(servicio.id)?'♥':'♡'}</Boton></div></article>}
