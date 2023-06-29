//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasGranos() {
  let existencia = prompt("Ingrese el nombre de que producto quiere ver la existencia: \n -Arroz \n -Frijoles \n -Lentejas")
  switch (existencia.toLowerCase()) {
    case "arroz" :
        return localStorage.getItem("arroz");
      break;
    case "frijoles":
        return localStorage.getItem("frijoles");
      break;
    case "lentejas":
        return localStorage.getItem("lentejas");
      break;
    default:
        return console.log("producto no encontrado");
      break;
  }
  
}
function existenciasAseo() {
  let existencia = prompt("Ingrese el nombre de que producto quiere ver la existencia:\n -jabon \n -limpido \n -champu")
  switch (existencia.toLowerCase()) {
    case "jabon" :
        return localStorage.getItem("jabon");
      break;
    case "limpido":
        return localStorage.getItem("limpido");
      break;
    case "champu":
        return localStorage.getItem("champu");
      break;
    default:
        return console.log("producto no encontrado");
      break;
  }
  
}
function existenciasCarnes() {
  let existencia = prompt("Ingrese el nombre de que producto quiere ver la existencia: \n -pescado\n -res\n -cerdo")
  switch (existencia.toLowerCase()) {
    case "pescado" :
        return localStorage.getItem("pescado");
      break;
    case "res":
        return localStorage.getItem("res");
      break;
    case "cerdo":
        return localStorage.getItem("cerdo");
      break;
    default:
        return console.log("producto no encontrado");
      break;
  }
  
}
function existenciasLacteos() {
  let existencia = prompt("Ingrese el nombre de que producto quiere ver la existencia \n -yogurt \n -leche \n -kumis")
  switch (existencia.toLowerCase()) {
    case "yogurt" :
        return localStorage.getItem("yogurt");
      break;
    case "leche":
        return localStorage.getItem("leche");
      break;
    case "kumis":
        return localStorage.getItem("kumis");
      break;
    default:
        return console.log("producto no encontrado");
      break;
  }
  
}

export {existenciasGranos, existenciasAseo, existenciasCarnes, existenciasLacteos};