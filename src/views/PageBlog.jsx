import { Link } from 'react-router-dom';
import { imagenes } from '../assets/imagenes';

const articulos = [
  {
    id: 1,
    imagen: imagenes.servicio1,
    alt: 'Alimentación saludable y control de peso',
    categoria: 'Alimentación saludable',
    titulo: '5 hábitos para mejorar tu alimentación diaria',
    descripcion: 'Pequeños cambios en nuestra alimentación pueden generar grandes beneficios. Conoce cinco hábitos sencillos para llevar una alimentación más equilibrada.',
    fecha: '28 de agosto de 2026',
    ruta: '/blog-detalle-1'
  },
  {
    id: 2,
    imagen: imagenes.servicio2,
    alt: 'Nutrición deportiva',
    categoria: 'Nutrición deportiva',
    titulo: 'Alimentación para acompañar tu entrenamiento',
    descripcion: 'Una correcta alimentación puede ayudarte a mejorar tu rendimiento y recuperación. Descubre algunos aspectos importantes de la nutrición deportiva.',
    fecha: '30 de agosto de 2026',
    ruta: '/blog-detalle-2'
  }
];

export default function PageBlog() {
  return (
    <main className="blog-pagina">
      <div className="blog-contenedor">
        <section className="blog-hero">
          <span className="blog-etiqueta">BLOG NUTRIVIDA</span>
          <h1>Consejos para una vida más saludable</h1>
          <p>Encuentra información y recomendaciones sobre alimentación, nutrición deportiva, hábitos saludables y bienestar.</p>
        </section>
        <section className="blog-lista" aria-labelledby="blog-titulo">
          <div className="blog-titulo">
            <span className="blog-subtitulo">NUTRICIÓN Y BIENESTAR</span>
            <h2 id="blog-titulo">Artículos recientes</h2>
            <p>Conoce algunos consejos que pueden ayudarte a mejorar tus hábitos alimenticios y cuidar tu salud.</p>
          </div>
          <div className="blog-grid">
            {articulos.map((articulo) => (
              <article className="blog-card" key={articulo.id}>
                <div className="blog-card-imagen">
                  <img src={articulo.imagen} alt={articulo.alt} />
                </div>
                <div className="blog-card-contenido">
                  <span className="blog-card-categoria">{articulo.categoria}</span>
                  <h3>{articulo.titulo}</h3>
                  <p>{articulo.descripcion}</p>
                  <div className="blog-card-footer">
                    <span className="blog-fecha">{articulo.fecha}</span>
                    <Link className="btn btn-secondary" to={articulo.ruta}>Leer artículo</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
