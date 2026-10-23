import InputNombre from '../components/InputNombre';
import { imagenes } from '../assets/imagenes';
import { Link } from 'react-router-dom';
import { validateForm } from '../utils/validacion';
export default function PageContacto(){return (<main onSubmit={validateForm}>
<section className="form-page form-page-centered">
<img src={imagenes.logo} alt="Logo NutriVida" className="form-logo"/>
<h1>Clínica NutriVida</h1>
<form id="form-contacto" noValidate={true}>
<h2>Formulario de contacto</h2>
<div className="form-group">
<label htmlFor="nombre">Nombre completo</label>
<InputNombre id="nombre" name="nombre" />
<span className="error-message" id="error-nombre"></span>
</div>
<div className="form-group">
<label htmlFor="correo">Correo</label>
<input type="email" id="correo" name="correo" maxLength="100"/>
<span className="error-message" id="error-correo"></span>
</div>
<div className="form-group">
<label htmlFor="mensaje">Mensaje</label>
<textarea id="mensaje" name="mensaje" rows="5" maxLength="500" required={true}></textarea>
<span className="error-message" id="error-mensaje"></span>
</div>
<button type="submit" className="btn btn-primary">Enviar mensaje</button>
</form>
</section>
</main>);}
