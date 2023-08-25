function programa() {
  let nombre = "Juan";
  let numero = 145;
  let booleano = false;
  let simbol = Symbol("foo");
  let indefinido = undefined;
  let nulo = null;
  let objeto = {
    nombre: nombre,
    "tipo de dato nombre": typeof nombre,
    numero: numero,
    "tipo de dato numero": typeof numero,
    booleano: booleano,
    "tipo de dato booleano": typeof booleano,
    simbol: simbol,
    "tipo de dato simbolo": typeof simbol,
    indefinido: indefinido,
    "tipo de dato indefinido": typeof indefinido,
    nulo: nulo,
    "tipo de dato nulo": typeof nulo,
  };
  console.table(objeto);
} 

programa();
