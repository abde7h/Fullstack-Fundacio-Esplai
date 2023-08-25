const obtenerNombreCompleto = () => {
  const nombre = "Juan";
  const apellidos = "Antonio";
  return `${nombre} ${apellidos}`;
};

const nombreCompleto = obtenerNombreCompleto();
console.log(nombreCompleto);

function imprimirBooleano(valor) {
  console.log(valor);
}

imprimirBooleano(true);

function mostrarParametrosInfinitos(...parametros) {
  parametros.forEach((parametro) => {
    console.log(parametro);
  });
}

mostrarParametrosInfinitos(1, 2, 3, 4, 5);

