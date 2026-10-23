// Mensajes en español para la validación nativa del navegador.
export function mostrarErrorEnEspanol(evento) {
  const campo = evento.target;
  if (!(campo instanceof HTMLInputElement || campo instanceof HTMLTextAreaElement || campo instanceof HTMLSelectElement)) return;
  const v = campo.validity;
  // Si ya existe un error personalizado, se conserva.
  if (v.customError && !campo.dataset.errorNativo) return;
  let mensaje = 'Revisa el valor ingresado.';
  if (v.valueMissing) mensaje = 'Este campo es obligatorio.';
  else if (v.typeMismatch && campo.type === 'email') mensaje = 'Introduce un correo electrónico válido.';
  else if (v.typeMismatch) mensaje = 'Introduce un valor válido.';
  else if (v.patternMismatch) mensaje = 'El formato ingresado no es válido.';
  else if (v.tooShort) mensaje = `Debes escribir al menos ${campo.minLength} caracteres.`;
  else if (v.tooLong) mensaje = `Debes escribir como máximo ${campo.maxLength} caracteres.`;
  else if (v.rangeUnderflow) mensaje = `El mínimo permitido es ${campo.min}.`;
  else if (v.rangeOverflow) mensaje = `El máximo permitido es ${campo.max}.`;
  else if (v.stepMismatch || v.badInput) mensaje = 'Introduce un número válido.';
  campo.setCustomValidity(mensaje);
  campo.dataset.errorNativo = 'true';
}

export function limpiarErrorNativo(evento) {
  const campo = evento.target;
  if (campo.dataset?.errorNativo) {
    campo.setCustomValidity('');
    delete campo.dataset.errorNativo;
  }
}
