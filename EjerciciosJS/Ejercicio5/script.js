// function programa() {
//   let mes = parseInt(document.getElementById("mesInput").value);
//   let mensaje;

//   switch (mes) {
//     case 1:
//       mensaje = "El numero del mes introducido pertenece a Enero";
//       break;
//     case 2:
//       mensaje = "El numero del mes introducido pertenece a Febrero";
//       break;
//     case 3:
//       mensaje = "El numero del mes introducido pertenece a Marzo";
//       break;
//     case 4:
//       mensaje = "El numero del mes introducido pertenece a Abril";
//       break;
//     case 5:
//       mensaje = "El numero del mes introducido pertenece a Mayo";
//       break;
//     case 6:
//       mensaje = "El numero del mes introducido pertenece a Junio";
//       break;
//     case 7:
//       mensaje = "El numero del mes introducido pertenece a Julio";
//       break;
//     case 8:
//       mensaje = "El numero del mes introducido pertenece a Agosto";
//       break;
//     case 9:
//       mensaje = "El numero del mes introducido pertenece a Septiembre";
//       break;
//     case 10:
//       mensaje = "El numero del mes introducido pertenece a Octubre";
//       break;
//     case 11:
//       mensaje = "El numero del mes introducido pertenece a Noviembre";
//       break;
//     case 12:
//       mensaje = "El numero del mes introducido pertenece a Diciembre";
//       break;
//     default:
//       mensaje = "Has introducido un numero erroneo";
//       break;
//   }
//   document.getElementById("dades").innerHTML = mensaje;
// }

function programa() {
  let mes = parseInt(document.getElementById("mesInput").value);
  let mensaje;

  switch (mes) {
    case 1:
      mensaje = "uno";
      break;
    case 2:
      mensaje = "dos";
      break;
    case 3:
      mensaje = "tres";
      break;
    case 4:
      mensaje = "cuatro";
      break;
    case 5:
      mensaje = "cinco";
      break;
    default:
      mensaje = "Has introducido un numero erroneo";
      break;
  }
  document.getElementById("dades").innerHTML = mensaje;
}