import { Link } from 'react-router-dom';
export default function PageSecretariaHome(){return (<main className="admin-content">
<h1>¡Hola, administrador!</h1>
<p>Panel de control de la clínica NutriVida. Desde aquí puedes gestionar pacientes y servicios.</p>
<div className="admin-resumen">
<div className="resumen-card"><h2>60</h2><p>Pacientes atendidos por semana</p></div>
<div className="resumen-card"><h2>4</h2><p>Nutricionistas activos</p></div>
<div className="resumen-card"><h2>20%</h2><p>Tasa de inasistencia</p></div>
</div>
</main>);}
