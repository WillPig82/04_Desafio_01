export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if (validadores[tipoDeInput]) {
		validadores[tipoDeInput](input);
	}
	 if (input.validity.valid) {
    input.parentElement.classList.remove("contacto__invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("contacto__invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  asunto: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El asunto debe contener entre 4 a 30 caracteres.",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El mensaje debe contener entre 10 a 300 caracteres.",
  },
};

const validadores = {
  nombre: (input) => validarNombre(input),
};
/*
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarNombre(input) {
  const nombreCliente = new text(input.value);
  let mensaje = "";
  if (!nombre(nombreCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}

function */