import InputNombre from '../components/InputNombre';
import { Link } from 'react-router-dom';
import { validateForm } from '../utils/validacion';
import {useState} from 'react';
import {REGIONES_COMUNAS} from '../data/regiones';
export default function PageSecretariaPacienteNuevo(){const [region,setRegion]=useState("");return (<main onSubmit={validateForm} className="admin-content">
<h1>Nuevo paciente</h1>
<form id="form-paciente" noValidate={true}>
<div className="form-group">
<label htmlFor="run">RUN</label>
<input type="text" id="run" minLength="7" maxLength="9" required={true}/>
<span className="error-message" id="error-run"></span>
</div>
<div className="form-group">
<label htmlFor="nombre">Nombre</label>
<InputNombre id="nombre" />
<span className="error-message" id="error-nombre"></span>
</div>
<div className="form-group">
<label htmlFor="apellidos">Apellidos</label>
<InputNombre id="apellidos" />
<span className="error-message" id="error-apellidos"></span>
</div>
<div className="form-group">
<label htmlFor="correo">Correo</label>
<input type="email" id="correo" maxLength="100" required={true}/>
<span className="error-message" id="error-correo"></span>
</div>
<div className="form-group">
<label htmlFor="fecha-nacimiento">Fecha de nacimiento</label>
<input type="date" id="fecha-nacimiento"/>
</div>
<div className="form-group">
<label htmlFor="tipo-usuario">Tipo de usuario</label>
<select id="tipo-usuario" required={true}>
<option value="">-- Seleccione --</option>
<option value="administrador">Administrador</option>
<option value="vendedor">Vendedor / Secretaria</option>
<option value="cliente">Cliente / Paciente</option>
</select>
</div>
<div className="form-group">
<label htmlFor="region">Región</label>
<select id="region" value={region} onChange={e=>setRegion(e.target.value)} required={true}><option value="">-- Seleccione la región --</option>{REGIONES_COMUNAS.map(r => <option key={r.region} value={r.region}>{r.region}</option>)}</select>
</div>
<div className="form-group">
<label htmlFor="comuna">Comuna</label>
<select id="comuna" key={region} required={true}><option value="">-- Seleccione la comuna --</option>{REGIONES_COMUNAS.find(r=>r.region===region)?.comunas.map(c=><option key={c} value={c}>{c}</option>)}</select>
</div>
<div className="form-group">
<label htmlFor="direccion">Dirección</label>
<input type="text" id="direccion" maxLength="300" required={true}/>
<span className="error-message" id="error-direccion"></span>
</div>
<button type="submit" className="btn btn-primary">Registrar</button>
</form>
</main>);}
