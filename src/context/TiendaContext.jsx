import { imagenes } from '../assets/imagenes';
import {createContext,useContext,useEffect,useState} from 'react';
import {SERVICIOS} from '../data/servicios';
const TiendaContext=createContext(null);
export function TiendaProvider({children}){
 const [productos,setProductos]=useState(SERVICIOS);
 const [carrito,setCarrito]=useState([]);
 const [favoritos,setFavoritos]=useState([]);
 const [sesion,setSesion]=useState(()=>{try{return JSON.parse(localStorage.getItem('nutrivida_sesion')||'null')}catch{return null}});
 const [perfil,setPerfil]=useState(()=>{try{return JSON.parse(localStorage.getItem('nutrivida_perfil')||'null')}catch{return null}});
 useEffect(()=>{if(sesion)localStorage.setItem('nutrivida_sesion',JSON.stringify(sesion));else localStorage.removeItem('nutrivida_sesion')},[sesion]);
 useEffect(()=>{if(perfil)localStorage.setItem('nutrivida_perfil',JSON.stringify(perfil))},[perfil]);
 const entrar=(correo,password)=>{if(correo.toLowerCase()==='admin@nutrivida.cl' && password==='Admin1234'){setSesion({correo,rol:'admin',nombre:'Administrador'});return true}if(perfil && correo.toLowerCase()===perfil.correo.toLowerCase() && password===perfil.password){setSesion({correo,rol:'paciente',nombre:perfil.nombre});return true}return false};
 const salir=()=>setSesion(null);
 const registrar=(datos)=>{setPerfil(datos);setSesion({correo:datos.correo,rol:'paciente',nombre:datos.nombre})};
 const agregarProducto=(datos)=>setProductos(actual=>[...actual,{...datos,id:Date.now(),imagen:imagenes.servicio1}]);
 const editarProducto=(id,datos)=>setProductos(actual=>actual.map(x=>x.id===Number(id)?{...x,...datos}:x));
 const quitarProducto=(id)=>setProductos(actual=>actual.filter(x=>x.id!==Number(id)));
 const agregarCarrito=(id,cantidad=1)=>setCarrito(actual=>{const actualItem=actual.find(x=>x.id===Number(id));return actualItem?actual.map(x=>x.id===Number(id)?{...x,cantidad:x.cantidad+Number(cantidad)}:x):[...actual,{id:Number(id),cantidad:Number(cantidad)}]});
 const cambiarCantidad=(id,cantidad)=>setCarrito(actual=>cantidad<=0?actual.filter(x=>x.id!==id):actual.map(x=>x.id===id?{...x,cantidad:Number(cantidad)}:x));
 const alternarFavorito=(id)=>setFavoritos(actual=>actual.includes(id)?actual.filter(x=>x!==id):[...actual,id]);
 return <TiendaContext.Provider value={{productos,carrito,favoritos,sesion,perfil,entrar,salir,registrar,agregarProducto,editarProducto,quitarProducto,agregarCarrito,cambiarCantidad,alternarFavorito,vaciarCarrito:()=>setCarrito([])}}>{children}</TiendaContext.Provider>
}
export function useTienda(){const ctx=useContext(TiendaContext);if(!ctx)throw Error('Falta TiendaProvider');return ctx}
