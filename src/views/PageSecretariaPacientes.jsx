import { Link } from 'react-router-dom';
export default function PageSecretariaPacientes(){return (<main className="admin-content">
<div className="admin-header-row">
<h1>Pacientes</h1>
<Link to="/secretaria/paciente-nuevo" className="btn btn-primary">Nuevo paciente</Link>
</div>
<table className="admin-table">
<thead>
<tr><th>RUN</th><th>Nombre</th><th>Correo</th><th>Nutricionista</th><th>Acciones</th></tr>
</thead>
<tbody id="tabla-pacientes">
 Filas generadas dinámicamente con JavaScript 
<tr>
<td>19011022K</td>
<td>Nombre ejemplo</td>
<td>correo@gmail.com</td>
<td>Nutricionista A</td>
<td><Link to="/secretaria/paciente-editar">Editar</Link></td>
</tr>
</tbody>
</table>
</main>);}
