import ServicioCard from './ServicioCard';
export default function GaleriaServicios({servicios}){return <div className="grid-cards">{servicios.length?servicios.map(servicio=><ServicioCard key={servicio.id} servicio={servicio}/>):<p>No se encontraron servicios.</p>}</div>}
