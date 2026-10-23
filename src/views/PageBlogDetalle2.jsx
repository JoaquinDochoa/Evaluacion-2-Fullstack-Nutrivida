import { imagenes } from '../assets/imagenes';
import { Link } from 'react-router-dom';
export default function PageBlogDetalle2(){return (<main>
<article className="blog-detalle">
<header className="blog-detalle-header">
<span className="blog-card-categoria">
          Nutrición deportiva
        </span>
<h1>
          Alimentación para acompañar tu entrenamiento
        </h1>
<p className="blog-meta">
          NutriVida · 30 de agosto de 2026
        </p>
</header>
<div className="blog-detalle-imagen">
<img src={imagenes.servicio2} alt="Nutrición deportiva"/>
</div>
<div className="blog-contenido">
<p className="blog-introduccion">
          La alimentación es un componente importante para las personas que
          realizan actividad física. Una estrategia nutricional adecuada puede
          acompañar el entrenamiento y contribuir a una mejor recuperación.
        </p>
<section>
<h2>Alimentación antes del entrenamiento</h2>
<p>
            Antes de realizar actividad física es importante considerar el tipo,
            duración e intensidad del entrenamiento. La elección de los
            alimentos debe adaptarse a las necesidades individuales y al
            horario de la actividad.
          </p>
</section>
<section>
<h2>La importancia de los carbohidratos</h2>
<p>
            Los carbohidratos forman parte de una alimentación que puede
            proporcionar energía para diferentes tipos de actividad física.
            Frutas, cereales, arroz, papas y otros alimentos pueden formar
            parte de una alimentación equilibrada.
          </p>
</section>
<section>
<h2>Proteínas y recuperación</h2>
<p>
            Las proteínas cumplen funciones importantes en el organismo y son
            especialmente relevantes dentro de la alimentación de personas
            físicamente activas. Su cantidad y distribución deben considerar
            las características y objetivos de cada persona.
          </p>
</section>
<section>
<h2>Hidratación durante el ejercicio</h2>
<p>
            La hidratación es otro aspecto importante durante la actividad
            física. Las necesidades pueden variar según la duración del
            ejercicio, la intensidad, el ambiente y las características
            individuales.
          </p>
</section>
<section>
<h2>La alimentación debe ser personalizada</h2>
<p>
            No existe una única estrategia nutricional que funcione de la
            misma manera para todas las personas. Los objetivos deportivos,
            horarios, preferencias alimentarias y características individuales
            deben ser considerados al momento de planificar la alimentación.
          </p>
</section>
<aside className="blog-consejo">
<h3>Consejo NutriVida</h3>
<p>
            Si realizas actividad física regularmente, una evaluación
            nutricional puede ayudarte a organizar tu alimentación de acuerdo
            con tus objetivos y características personales.
          </p>
</aside>
<div className="blog-acciones">
<Link to="/blog" className="btn btn-secondary">
            ← Volver al blog
          </Link>
<Link to="/servicios" className="btn btn-primary">
            Agendar una consulta
          </Link>
</div>
</div>
</article>
</main>);}
