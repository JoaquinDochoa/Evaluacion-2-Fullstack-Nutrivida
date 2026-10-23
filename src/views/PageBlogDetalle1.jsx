import { imagenes } from '../assets/imagenes';
import { Link } from 'react-router-dom';
export default function PageBlogDetalle1(){return (<main>
<article className="blog-detalle">
<header className="blog-detalle-header">
<span className="blog-card-categoria">
          Alimentación saludable
        </span>
<h1>
          5 hábitos para mejorar tu alimentación diaria
        </h1>
<p className="blog-meta">
          NutriVida · 28 de agosto de 2026
        </p>
</header>
<div className="blog-detalle-imagen">
<img src={imagenes.servicio1} alt="Alimentación saludable y control de peso"/>
</div>
<div className="blog-contenido">
<p className="blog-introduccion">
          Mantener una alimentación equilibrada no significa realizar cambios
          extremos de un día para otro. Incorporar pequeños hábitos de manera
          constante puede ayudarte a mejorar tu alimentación y favorecer un
          estilo de vida más saludable.
        </p>
<section>
<h2>1. Mantén horarios regulares de alimentación</h2>
<p>
            Organizar tus comidas durante el día puede ayudarte a mantener una
            alimentación más ordenada. Intentar respetar horarios regulares
            permite planificar mejor lo que consumes y evitar decisiones
            impulsivas relacionadas con la alimentación.
          </p>
</section>
<section>
<h2>2. Incorpora frutas y verduras</h2>
<p>
            Las frutas y verduras son alimentos importantes dentro de una
            alimentación equilibrada. Intenta incluir diferentes variedades
            durante la semana para aumentar la diversidad de nutrientes
            presentes en tu alimentación.
          </p>
</section>
<section>
<h2>3. Prefiere alimentos poco procesados</h2>
<p>
            Siempre que sea posible, prioriza alimentos naturales o
            mínimamente procesados. Legumbres, frutas, verduras, cereales
            integrales y otros alimentos frescos pueden formar parte de una
            alimentación variada.
          </p>
</section>
<section>
<h2>4. Mantén una buena hidratación</h2>
<p>
            El agua cumple funciones importantes para el organismo. Mantener
            una hidratación adecuada durante el día es un hábito sencillo que
            puede acompañar una alimentación saludable.
          </p>
</section>
<section>
<h2>5. Planifica tus comidas</h2>
<p>
            Dedicar unos minutos a planificar tus comidas puede facilitar la
            elección de alimentos y ayudarte a mantener una alimentación más
            organizada durante la semana.
          </p>
</section>
<aside className="blog-consejo">
<h3>Consejo NutriVida</h3>
<p>
            No es necesario cambiar todos tus hábitos de una sola vez.
            Comienza incorporando pequeños cambios que puedas mantener de
            manera constante y progresiva.
          </p>
</aside>
<div className="blog-acciones">
<Link to="/blog" className="btn btn-secondary">
            ← Volver al blog
          </Link>
<Link to="/servicios" className="btn btn-primary">
            Conocer nuestros servicios
          </Link>
</div>
</div>
</article>
</main>);}
