import { imagenes } from '../assets/imagenes';
import { Link } from 'react-router-dom';
export default function PageNosotros(){return (<main>
<section className="contenido-simple">
<h1>Sobre NutriVida</h1>
<p>NutriVida es una clínica de nutrición y dietética fundada en 2016 en Temuco, Región de La Araucanía. Contamos con un equipo de 6 nutricionistas especializados en pérdida de peso, control de enfermedades metabólicas, nutrición deportiva y alimentación vegetariana o vegana.</p>
<h2>Nuestro equipo</h2>
<div className="grid-cards">
<article className="card">
<img src={imagenes.equipo} alt="Nutricionista del equipo"/>
<h3>Conoce a nuestro equipo de nutricionistas</h3>
<p>Nos especializamos en darte la mejor atencion y asesoria para que cumplas tus
              objetivos. Recuerda!! no es solo comer bien de vez en cuando, si no que llevar un estilo de vida saludable.
            </p>
</article>
</div>
</section>
</main>);}
