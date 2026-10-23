import RutaPrivada from './components/RutaPrivada';
import Carrito from './views/Carrito';
import Perfil from './views/Perfil';
import NoEncontrada from './views/NoEncontrada';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import Inicio from './views/Inicio';
import Servicios from './views/Servicios';
import ServicioDetalle from './views/ServicioDetalle';

import PageLogin from './views/PageLogin';
import PageBlog from './views/PageBlog';
import PageBlogDetalle1 from './views/PageBlogDetalle1';
import PageBlogDetalle2 from './views/PageBlogDetalle2';
import PageContacto from './views/PageContacto';
import PageNosotros from './views/PageNosotros';
import PageRegistro from './views/PageRegistro';
import PageSecretariaServicios from './views/PageSecretariaServicios';
import PageSecretariaServicioEditar from './views/PageSecretariaServicioEditar';
import PageSecretariaPacientes from './views/PageSecretariaPacientes';
import PageSecretariaPacienteEditar from './views/PageSecretariaPacienteEditar';
import PageSecretariaPacienteNuevo from './views/PageSecretariaPacienteNuevo';
import PageSecretariaHome from './views/PageSecretariaHome';
import PageSecretariaServicioNuevo from './views/PageSecretariaServicioNuevo';
export default function App(){ return (<Routes><Route element={<Layout/>}><Route index element={<Inicio/>}/><Route path="servicios" element={<Servicios/>}/><Route path="servicio-detalle" element={<ServicioDetalle/>}/>
        <Route path="login" element={<PageLogin/>} />
        <Route path="blog" element={<PageBlog/>} />
        <Route path="blog-detalle-1" element={<PageBlogDetalle1/>} />
        <Route path="blog-detalle-2" element={<PageBlogDetalle2/>} />
        <Route path="contacto" element={<PageContacto/>} />
        <Route path="nosotros" element={<PageNosotros/>} />
        <Route path="registro" element={<PageRegistro/>} />
        <Route path="carrito" element={<Carrito/>}/><Route path="perfil" element={<Perfil/>}/><Route element={<RutaPrivada/>}><Route path="secretaria/servicios" element={<PageSecretariaServicios/>} />
        <Route path="secretaria/servicio-editar" element={<PageSecretariaServicioEditar/>} />
        <Route path="secretaria/pacientes" element={<PageSecretariaPacientes/>} />
        <Route path="secretaria/paciente-editar" element={<PageSecretariaPacienteEditar/>} />
        <Route path="secretaria/paciente-nuevo" element={<PageSecretariaPacienteNuevo/>} />
        <Route path="secretaria/home" element={<PageSecretariaHome/>} />
        <Route path="secretaria/servicio-nuevo" element={<PageSecretariaServicioNuevo/>} /></Route>
<Route path="*" element={<NoEncontrada/>}/></Route></Routes> ); }
