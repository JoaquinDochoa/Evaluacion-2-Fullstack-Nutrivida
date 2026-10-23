import { validarNombre } from '../utils/validacion';

// Conserva la validación HTML nativa mediante setCustomValidity.
export default function InputNombre({ id = 'nombre', name = id, value, onChange, ...props }) {
  function manejarCambio(evento) {
    const texto = evento.target.value;
    evento.target.setCustomValidity(
      !texto || validarNombre(texto) ? '' : 'Por favor, introduce un nombre válido.'
    );
    if (onChange) onChange(evento);
  }
  return <input type="text" id={id} name={name} value={value} onChange={manejarCambio} onBlur={manejarCambio} minLength={2} maxLength={50} required {...props} />;
}
