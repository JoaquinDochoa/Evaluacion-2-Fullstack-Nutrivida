export function validarNombre(nombre) {
  const regex = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
  return regex.test(nombre);
}
export function validarRun(run){if(!/^[0-9]{6,8}[0-9Kk]$/.test(run))return false;let sum=0,m=2;for(let i=run.length-2;i>=0;i--){sum+=Number(run[i])*m;m=m===7?2:m+1}const n=11-(sum%11);return run.slice(-1).toUpperCase()===(n===11?'0':n===10?'K':String(n));}
export function validateForm(event){event.preventDefault();const form=event.target;if(!(form instanceof HTMLFormElement))return;let ok=true;
for(const field of form.querySelectorAll('input,textarea,select')){if(field.type==='file')continue;const value=field.value.trim();let error='';
if(field.required&&!value)error='Este campo es obligatorio.';
else if(value&&field.minLength>0&&value.length<field.minLength)error=`Mínimo ${field.minLength} caracteres.`;
else if(value&&field.maxLength>0&&value.length>field.maxLength)error=`Máximo ${field.maxLength} caracteres.`;
else if(value&&['nombre','apellidos'].includes(field.id)&&!validarNombre(value))error='Por favor, introduce un nombre válido (solo letras, entre 2 y 50 caracteres).';
else if(value&&field.id==='run'&&!validarRun(value))error='RUN inválido. Ingrese sin puntos ni guion.';
else if(value&&field.type==='email'&&!/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i.test(value))error='Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';
else if(value&&field.id==='password'&&(value.length<4||value.length>10))error='La contraseña debe tener entre 4 y 10 caracteres.';
else if(field.id==='confirmar-password'&&value!==form.querySelector('#password')?.value)error='Las contraseñas no coinciden.';
else if(value&&field.type==='number'&&field.min!==''&&Number(value)<Number(field.min))error=`Valor mínimo: ${field.min}`;
const msg=form.querySelector(`[id="error-${field.id}"]`);if(msg)msg.textContent=error;field.classList.toggle('input-error',!!error);if(error)ok=false;
}
if(ok){alert('Formulario validado correctamente. Demostración sin base de datos ni servidor de autenticación.');form.reset()}
}
